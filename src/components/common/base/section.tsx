import { css, styled } from '@mui/material'
import { borderRadius } from '../css/responsive'

export const StyledSection = styled('section')(
	({ theme }) => css`
		background-color: ${theme.palette.secondary.main};
		box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.03);
		padding: 16px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			border-radius: ${borderRadius.xs};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			border-radius: ${borderRadius.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			border-radius: ${borderRadius.lg};
		}
	`
)
