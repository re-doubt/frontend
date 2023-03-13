import { css, Link, styled } from '@mui/material'
import { h3FontSize } from '../css/responsive'

export const H3 = styled('div')(
	({ theme }) => css`
		font-weight: 600;
		line-height: 24px;
		font-size: 20px;
		text-decoration: none;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${h3FontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${h3FontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${h3FontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${h3FontSize.lg};
		}
	`
)

export const H3Link = styled(Link)(
	({ theme }) => css`
		font-weight: 600;
		line-height: 24px;
		font-size: 20px;
		text-decoration: none;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${h3FontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${h3FontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${h3FontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${h3FontSize.lg};
		}
	`
)
