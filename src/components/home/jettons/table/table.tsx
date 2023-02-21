import { styled } from '@mui/material/styles'
import { IJetton } from 'src/api/types'
import { FC, useEffect, useMemo, useState } from 'react'
import { GridRowsProp, GridColDef, DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import { Jetton } from './cells/jetton'
import { CustomPagination } from './components/pagination'
import { Price } from '../../../common/format/price'
import { Change } from '../../../common/format/change'
import { useGetJettonsQuery } from 'src/api/rtk'
import { jettonsActions } from 'src/store/jettons-slice'
import { useDispatch } from 'react-redux'
import { platformsActions } from 'src/store/platforms-slice'
import { volumeActions } from 'src/store/volume-slice'
import { getColorForPercentage } from 'src/utils/getColor'

interface ITable {}

const Wrapper = styled('div')`
	width: 100%;
	height: 1000px;
`

const ColoredText = styled('p', {
	shouldForwardProp: (prop) => prop !== 'impact'
})<{ percentage: number | null }>(
	({ percentage, theme }) => `
     color: ${getColorForPercentage(theme, percentage)};
   `
)

const JettonsTable: FC<ITable> = () => {
	const { data, isSuccess } = useGetJettonsQuery('')
	const [jettons, setJettons] = useState<IJetton[]>([])
	const dispatch = useDispatch()

	useEffect(() => {
		if (isSuccess) {
			setJettons(data.jettons)
			dispatch(jettonsActions.setJettons(data.jettons))
			dispatch(platformsActions.setPlatforms(data.platforms))
			dispatch(volumeActions.setVolume(data.total))
		}
	}, [isSuccess])

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
	}, [jettons])

	const columns = useMemo((): GridColDef => {
		// @ts-ignore
		return [
			{ field: 'id', headerName: '#', width: 80, hideable: false },
			{
				field: 'name',
				headerName: 'Jetton',
				width: 220,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Jetton symbol={row.data.name} address={row.data.address} />
				}
			},
			{
				field: 'price',
				headerName: 'Price',
				width: 220,
				hideable: false,
				renderCell: ({ value }: GridRenderCellParams<string>) => {
					return <Price isFloat={true} value={value!} />
				}
			},
			{
				field: 'price24h',
				headerName: 'Price 24h',
				width: 220,
				hideable: false,
				renderCell: ({ row, value }: GridRenderCellParams<string>) => {
					return <ColoredText percentage={row.data.price.percent}>{value ? `${value}%` : 'New 🔥'}</ColoredText>
				}
			},
			{
				field: 'marketVolume',
				headerName: 'Volume 24h',
				width: 220,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Price value={row.data.marketVolume.value} percentage={row.data.marketVolume.percent} />
				}
			},
			{
				field: 'activeOwners24h',
				headerName: 'Owners 24h',
				width: 220,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Change value={row.data.activeOwners24h.value} percentage={row.data.activeOwners24h.percent} />
				}
			},
			{
				field: 'totalHolders',
				headerName: 'Total Holders',
				width: 220,
				hideable: false,
				renderCell: ({ row }: GridRenderCellParams<string>) => {
					return <Change value={row.data.totalHolders.value} percentage={row.data.totalHolders.percent} />
				}
			}
		]
	}, [jettons])

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
			/>
		</Wrapper>
	)
}

export default JettonsTable

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
	'&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { padding: '24px' },
	'&.MuiDataGrid-root--densityComfortable .MuiDataGrid-columnHeader': { padding: '24px' }
}))
