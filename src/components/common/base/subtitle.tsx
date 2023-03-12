import { css, styled } from '@mui/material'
import { h2FontSize } from '../css/responsive'

export const SubTitle = styled('h2')(
	({ theme }) => css`
		font-weight: 600;
		font-size: 24px;
		line-height: 34px;
		margin-bottom: 4px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${h2FontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${h2FontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${h2FontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${h2FontSize.lg};
		}
	`
)
