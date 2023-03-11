import { css, Pagination, PaginationItem, styled } from '@mui/material'
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
import { ChangeEvent } from 'react'
import { bodyFontSize } from 'src/components/common/css/responsive'

const StyledItem = styled(PaginationItem)(
	({ theme }) => css`
		border-radius: 16px !important;
		margin: 0 8px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${bodyFontSize.xs};
			min-width: 32px;
			height: 32px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${bodyFontSize.md};
			min-width: 40px;
			height: 40px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${bodyFontSize.lg};
			min-width: 48px;
			height: 48px;
		}
	`
)

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
