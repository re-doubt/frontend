import { styled } from '@mui/material/styles'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { JettonInterface } from 'src/api/types'
import type { ChangeEvent, FC } from 'react'
import { GridRowsProp, GridColDef, DataGrid, useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector } from '@mui/x-data-grid'

interface ITable {
	jettons: JettonInterface[]
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
	border: 0,
	color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
	fontFamily: ['Inter', 'sans-serif'].join(','),
	WebkitFontSmoothing: 'auto',
	letterSpacing: 'normal',
	'& .MuiDataGrid-columnsContainer': {
		backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d'
	},
	'& .MuiDataGrid-iconSeparator': {
		display: 'none'
	},
	'& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
		borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
	},
	'& .MuiDataGrid-columnHeader:first-child, .MuiDataGrid-cell:first-child': {
		borderRight: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
	},
	'& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
		borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'}`
	},
	'& .MuiDataGrid-cell': {
		color: theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)'
	},
	'& .MuiPaginationItem-root': {
		borderRadius: 0
	}
}))

function CustomPagination() {
	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)

	return (
		<Pagination
			color="primary"
			variant="outlined"
			shape="rounded"
			page={page + 1}
			count={pageCount}
			// @ts-expect-error
			renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
			onChange={(event: ChangeEvent<unknown>, value: number) => apiRef.current.setPage(value - 1)}
		/>
	)
}

const Wrapper = styled('div')`
	width: 100%;
	height: 625px;
`

const JettonsTable: FC<ITable> = ({ jettons }) => {
	const rows: GridRowsProp = jettons.map((jetton, index) => ({
		id: index + 1,
		name: jetton.name,
		price: jetton.price.value,
		marketVolume: jetton.marketVolume.value,
		totalHolders: jetton.totalHolders.value,
		activeOwners24h: jetton.activeOwners24h.value
	}))

	// @ts-ignore
	const columns: GridColDef = [
		{ field: 'id', headerName: '#' },
		{ field: 'name', headerName: 'Jetton' },
		{ field: 'price', headerName: 'Price' },
		{ field: 'marketVolume', headerName: 'Volume 24h' },
		{ field: 'activeOwners24h', headerName: 'Owners 24h' },
		{ field: 'totalHolders', headerName: 'Total Holders' }
	]

	return (
		<Wrapper>
			<StyledDataGrid
				pageSize={10}
				rowsPerPageOptions={[10]}
				components={{
					Pagination: CustomPagination
				}}
				rows={rows}
				// @ts-ignore
				columns={columns}
			/>
		</Wrapper>
	)
}

export default JettonsTable
