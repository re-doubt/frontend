import { css, Stack, styled } from '@mui/material'
import { bodyFontSize } from 'src/components/common/css/responsive'
import { Price } from 'src/components/common/format/price'
import { platformInfo } from 'src/constants/platforms'

const Tooltip = styled(Stack)(
	({ theme }) => css`
		background-color: ${theme.palette.background.paper};
		border: 1px solid ${theme.palette.primary.main};
		border-radius: 8px;
		padding: 8px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${bodyFontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${bodyFontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${bodyFontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${bodyFontSize.lg};
		}
	`
)

export const CustomTooltip = ({ active, payload }: any) => {
	if (active && payload && payload.length) {
		return (
			<Tooltip direction="row" alignItems="center" gap="10px">
				<div>{platformInfo[payload[0]?.payload.name]?.title}:</div>
				<Price value={payload[0]?.value} />
			</Tooltip>
		)
	}

	return null
}
