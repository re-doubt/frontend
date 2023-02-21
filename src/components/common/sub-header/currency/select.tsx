import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { SupportedCurrencies } from 'src/utils/currency-builder'
import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { COINGECKO_API } from 'src/constants/api'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { settingsActions } from 'src/store/settings-slice'

const StyledSelect = styled(Select)`
	border-radius: 24px;
	box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.03);
`

export function CurrecySelect() {
	const [usdRate, setUsdRate] = useState(0)
	const dispatch = useDispatch()

	const { data: prices } = useQuery('ton-price', async () => {
		return axios.get(COINGECKO_API)
	})

	useEffect(() => {
		if (prices?.data?.['the-open-network']?.usd) {
			setUsdRate(parseFloat(prices.data['the-open-network'].usd))
		}
	}, [prices])

	const handleCurrency = (event: SelectChangeEvent) => {
		const value = event.target.value as keyof typeof SupportedCurrencies

		switch (value) {
			case SupportedCurrencies.USD:
				dispatch(settingsActions.setCurrency({ currency: SupportedCurrencies.USD, multiplier: usdRate }))
				break

			default:
				dispatch(settingsActions.resetCurrency())
				break
		}
	}

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<StyledSelect
					// @ts-ignore
					onChange={handleCurrency}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					defaultValue={SupportedCurrencies.TON}
					id="currency-select"
				>
					<ListSubheader>Crypto</ListSubheader>
					<MenuItem value={SupportedCurrencies.TON}>💎 TON</MenuItem>
					<ListSubheader>Fiat</ListSubheader>
					<MenuItem value={SupportedCurrencies.USD}>💲 USD</MenuItem>
				</StyledSelect>
			</FormControl>
		</div>
	)
}
