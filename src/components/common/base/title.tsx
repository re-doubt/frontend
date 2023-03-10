import { css, styled } from '@mui/material'
import { h1FontSize } from '../css/responsive'

export const Title = styled('h1')(
	({ theme }) => css`
		font-weight: 600;
		line-height: 34px;
		margin-bottom: 4px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${h1FontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${h1FontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${h1FontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${h1FontSize.lg};
		}
	`
)
