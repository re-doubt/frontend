import { Pagination, PaginationItem, styled } from '@mui/material'
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { ChangeEvent } from 'react'

const StyledItem = styled(PaginationItem)`
	border-radius: 8px !important;
	margin: 0 8px;
	font-size: 18px;
	min-width: 48px;
	height: 48px;
	::selection {
		background: black;
	}
`

const StyledPagination = styled(Pagination)`
	align-items: center;
`

export function CustomPagination() {
	const apiRef = useGridApiContext()
	const page = useGridSelector(apiRef, gridPageSelector)
	const pageCount = useGridSelector(apiRef, gridPageCountSelector)

	return (
		<StyledPagination
			color="primary"
			variant="outlined"
			shape="rounded"
			page={page + 1}
			count={pageCount}
			// @ts-expect-error
			renderItem={(props2) => <StyledItem {...props2} disableRipple />}
			onChange={(event: ChangeEvent<unknown>, value: number) => apiRef.current.setPage(value - 1)}
		/>
	)
}
