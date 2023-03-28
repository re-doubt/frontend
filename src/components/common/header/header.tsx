import { styled, css } from '@mui/material/styles'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { gridGap, navigationLinkFontSize } from '../css/responsive'
import { Logo } from '../logo/Logo'

export const Header: FC = () => {
	return (
		<StyledHeader>
			<Logo />
			<Links>
				<StyledLink to="/jettons">Jettons</StyledLink>
				<StyledLink to="/platforms">Platforms</StyledLink>
			</Links>
		</StyledHeader>
	)
}

const StyledHeader = styled('header')`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Links = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(3, max-content);
		align-items: center;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			grid-gap: ${gridGap.xs};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			grid-gap: ${gridGap.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			grid-gap: ${gridGap.lg};
		}
	`
)

const StyledLink = styled(Link)(
	({ theme }) => css`
		font-weight: 600;
		line-height: 24px;
		text-decoration: none;
		cursor: pointer;
		color: ${theme.palette.text.primary};

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${navigationLinkFontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${navigationLinkFontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${navigationLinkFontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${navigationLinkFontSize.lg};
		}
	`
)
