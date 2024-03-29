import { css, styled } from '@mui/material/styles'
import { FC, useMemo } from 'react'
import { GridRowsProp, GridColDef, DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { Jetton } from './cells/jetton'
import { CustomPagination } from './components/pagination'
import { Price } from '../../../common/format/price'
import { Change } from '../../../common/format/change'
import { getColorForPercentage } from 'src/utils/getColor'
import { useTypedSelector } from 'src/store/store'
import { LinearProgress } from '@mui/material'
import { bodyFontSize, padding } from 'src/components/common/css/responsive'
import { useBreakpointValue } from 'src/hooks/useBreakpointValue'

interface ITable {}

const Wrapper = styled('div')(
	({ theme }) => css`
		width: 100%;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			height: 750px;
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			height: 850px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			height: 900px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			height: 1000px;
		}
	`
)

const ColoredText = styled('div', {
	shouldForwardProp: (prop) => prop !== 'impact'
})<{ percentage: string | null }>(
	({ percentage, theme }) => `
     color: ${getColorForPercentage(theme, percentage ? parseInt(percentage, 10) : 0)};
   `
)

export const JettonsTable: FC<ITable> = () => {
	const jettons = useTypedSelector((state) => state.jettons.jettons)
	const isLoading = useTypedSelector((state) => state.jettons.isLoading)
	const baseCellWidth = useBreakpointValue({ xs: 140, sm: 180, md: 200, lg: 220 })
	const smallCellWidth = useBreakpointValue({ xs: 30, sm: 40, md: 60, lg: 80 })
	const midCellWidth = useBreakpointValue({ xs: 110, sm: 150, md: 170, lg: 200 })

	const rows = useMemo((): GridRowsProp => {
		return jettons.map((jetton, index) => ({
			data: jetton,
			id: index + 1,
			name: jetton.name,
			price: jetton.price.value,
			price24h: jetton.price.percent,
			marketVolume: jetton.marketVolume.value,
			totalHolders: jetton.totalHolders.value,
			activeOwners24h: jetton.activeOwners24h.value
		}))
	}, [jettons, isLoading])

	const columns = useMemo((): GridColDef => {
		// @ts-ignore
		return [
			{ field: 'id', headerName: '#', width: smallCellWidth, hideable: false },
			{
				field: 'name',
				headerName: 'Jetton',
				width: baseCellWidth,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Jetton symbol={row.data.name} address={row.data.address} />
				}
			},
			{
				field: 'price',
				headerName: 'Price',
				width: midCellWidth,
				hideable: false,
				renderCell: ({ value }: GridRenderCellParams<string>) => {
					return <Price isFloat={true} value={value!} />
				}
			},
			{
				field: 'price24h',
				headerName: 'Price 24h',
				width: midCellWidth,
				hideable: false,
				renderCell: ({ value }: GridRenderCellParams<string>) => {
					return <ColoredText percentage={value || '0'}>{value || parseInt(value!, 10) === 0 ? `${value}%` : 'New 🔥'}</ColoredText>
				}
			},
			{
				field: 'marketVolume',
				headerName: 'Volume 24h',
				width: baseCellWidth,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Price value={row.data.marketVolume.value} percentage={row.data.marketVolume.percent} />
				}
			},
			{
				field: 'activeOwners24h',
				headerName: 'Owners 24h',
				width: baseCellWidth,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Change value={row.data.activeOwners24h.value} percentage={row.data.activeOwners24h.percent} />
				}
			},
			{
				field: 'totalHolders',
				headerName: 'Total Holders',
				width: baseCellWidth,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Change value={row.data.totalHolders.value} percentage={row.data.totalHolders.percent} />
				}
			}
		]
	}, [jettons, baseCellWidth])

	return (
		<Wrapper>
			<StyledDataGrid
				pageSize={10}
				rowsPerPageOptions={[10]}
				density="comfortable"
				components={{
					Pagination: CustomPagination
				}}
				getRowHeight={() => 'auto'}
				getEstimatedRowHeight={() => 200}
				rows={rows}
				// @ts-ignore
				columns={columns}
				slots={{
					loadingOverlay: LinearProgress
				}}
				loading={isLoading}
			/>
		</Wrapper>
	)
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	border: 0,
	color: theme.palette.mode === 'light' ? theme.palette.text.primary : 'rgba(255,255,255,0.85)',
	fontFamily: ['Inter', 'sans-serif'].join(','),
	fontSize: '18px',
	WebkitFontSmoothing: 'auto',
	letterSpacing: 'normal',
	'& .MuiDataGrid-columnsContainer': {
		backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
	},
	'& .MuiDataGrid-footerContainer': {
		borderTop: 'none'
	},
	'& .MuiDataGrid-iconSeparator': {
		display: 'none'
	},
	'& .MuiDataGrid-cell': {
		color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)'
	},
	'& .MuiPaginationItem-root': {
		borderRadius: 0
	},
	'&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { padding: '8px' },
	'&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { padding: '16px' },
	'&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
		[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
			padding: padding.xs
		},
		[`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
			padding: padding.sm
		},
		[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
			padding: padding.md
		},
		[`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
			padding: padding.lg
		}
	},
	'&.MuiDataGrid-root--densityComfortable .MuiDataGrid-columnHeader': {
		[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
			padding: padding.xs
		},
		[`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
			padding: padding.sm
		},
		[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
			padding: padding.md
		},
		[`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
			padding: padding.lg
		}
	},
	[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
		fontSize: bodyFontSize.xs
	},
	[`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
		fontSize: bodyFontSize.sm
	},
	[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
		fontSize: bodyFontSize.md
	},
	[`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
		fontSize: bodyFontSize.lg
	}
}))
