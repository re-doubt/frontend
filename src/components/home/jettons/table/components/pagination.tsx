import { Pagination, PaginationItem } from '@mui/material'
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { ChangeEvent } from 'react'

export function CustomPagination() {
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
