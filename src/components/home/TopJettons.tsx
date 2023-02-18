import {
	Box,
	Button,
	CircularProgress,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material'
import { MouseEvent, useEffect, useState, FC } from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import HelpIcon from '@mui/icons-material/Help'
import { COINGECKO_API } from 'src/constants/api'
import { Jetton } from './Jetton'
import { useQuery } from 'react-query'
import { apiClient } from 'src/api/client'
import axios from 'axios'
import { Platform } from './Platform'

type ValueWithPercentage = {
	value: number
	percent: number
}

type JettonInterface = {
	name: string
	address: string
	price: ValueWithPercentage
	marketVolume: ValueWithPercentage
	activeOwners24h: ValueWithPercentage
}

type PlatformInterface = {
	name: string
	marketVolume: number
}

// TODO: map this to routes properly
type ApiResponse = {
	jettons: JettonInterface[]
	platforms: PlatformInterface[]
	total: number
}

export const TopJettons: FC = () => {
	const [jettons, setJettons] = useState<JettonInterface[]>([])
	const [platforms, setPlatforms] = useState<PlatformInterface[]>([])
	const [totalVolume, setTotalVolume] = useState<number | undefined>(undefined)
	const [currencyRates, setCurrencyRates] = useState(undefined)
	const [currency, setCurrency] = useState<string>('TON')
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const defaultTimeout = 5000
	let timeout = defaultTimeout

	const { data, isError, isFetched } = useQuery('top-jettons', async () => {
		return apiClient.get<ApiResponse>('v1/jettons/top')
	})

	useEffect(() => {
		if (isFetched) {
			if (data?.data?.jettons) {
				setJettons(data.data.jettons)
				setPlatforms(data.data.platforms.sort((p1, p2) => p2.marketVolume - p1.marketVolume))
			}

			if (data?.data.total) {
				setTotalVolume(data.data.total)
			}
		}
	}, [data, isFetched])

	const { data: prices } = useQuery('jetton-prices', async () => {
		return axios.get(COINGECKO_API)
	})

	useEffect(() => {
		if (prices?.data?.['the-open-network']) {
			setCurrencyRates(prices.data['the-open-network'])
		}
	}, [prices])

	const handleClose = () => {
		setAnchorEl(null)
	}

	function handleClick(event: MouseEvent<HTMLElement>) {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget)
		}
	}

	function changeCurrency(event: MouseEvent<HTMLElement>) {
		setCurrency(event?.currentTarget?.dataset?.currency || '')
		handleClose()
	}

	const currencySymbols = { usd: '$', TON: '💎' }

	function currencyFormatter(value: any, precision: any) {
		if (currency in (currencyRates ?? {})) {
			// @ts-ignore
			value = value * currencyRates[currency]
		}
		if (precision > 0) {
			value = value.toPrecision(precision)
		} else {
			value = Math.round(value)
		}
		// @ts-ignore
		return value + '\u00a0' + currencySymbols[currency]
	}

	return (
		<Container sx={{ pt: 5, pb: 6 }}>
			{isFetched ? (
				<Container>
					<Typography variant="h5">
						Total market volume for all jettons in <b>24h</b> is {currencyFormatter(totalVolume, 0)}
						<Button
							variant="outlined"
							sx={{ ml: 2 }}
							aria-owns={anchorEl ? 'simple-menu' : undefined}
							endIcon={<CurrencyExchangeIcon />}
							onClick={handleClick}
						>
							{currency}
						</Button>
					</Typography>
					<Container>
						{platforms.map((platform, key) => (
							<Platform key={`platform-${key}`} name={platform.name} marketVolume={currencyFormatter(platform.marketVolume, 0)}></Platform>
						))}
					</Container>
					<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
						<MenuItem data-currency="TON" onClick={changeCurrency}>
							TON
						</MenuItem>
						{Object.keys(currencyRates ?? {}).map((c, key) => (
							<MenuItem key={`currencies-menu-${key}`} data-currency={c} onClick={changeCurrency}>
								{c.toUpperCase()}
							</MenuItem>
						))}
					</Menu>

					<TableContainer>
						<Table
							sx={{
								minWidth: 650,
								color: 'text.primary',
								borderCollapse: 'separate',
								borderSpacing: '0px 10px'
							}}
							size="small"
							aria-label="a dense table"
							className="jettons_table"
						>
							<TableHead>
								<TableRow>
									<TableCell className="jettons_cell">Jetton</TableCell>
									<TableCell className="jettons_cell">Price ({currency.toUpperCase()} / jetton)</TableCell>
									<TableCell className="jettons_cell">Volume 24h ({currency.toUpperCase()})</TableCell>
									<TableCell className="jettons_cell">Active owners 24h</TableCell>
									<TableCell className="jettons_cell">Total holders</TableCell>
									{/* <TableCell className="jettons_cell">Created</TableCell> */}
								</TableRow>
							</TableHead>
							<TableBody>
								{jettons.map((jetton, idx) => (
									<Jetton key={`jettons-${idx}`} jetton={jetton} currencyFormatter={currencyFormatter} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Container>
			) : (
				<Box>
					<Typography variant="h3">Analyzing Blockchain transactions...</Typography>
					<CircularProgress color="primary" />
				</Box>
			)}
		</Container>
	)
}

export default TopJettons
