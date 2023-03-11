import { styled, css } from '@mui/material/styles'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { gridGap, navigationLinkFontSize } from '../css/responsive'

export const Header: FC = () => {
	return (
		<StyledHeader>
			<LogoWrapper to="/">
				<Logo src="img/common/header/logo.svg" />
				<TitleWithPrefix>
					<Title>re:doubt</Title>
					<Prefix>v.0.1</Prefix>
				</TitleWithPrefix>
			</LogoWrapper>

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

const Logo = styled('img')(
	({ theme }) => css`
		@media (min-width: ${theme.breakpoints.values.xs}px) {
			width: 30px;
			height: 30px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			width: 40px;
			height: 40px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			width: 50px;
			height: 50px;
		}
	`
)

const Title = styled('h3')(
	({ theme }) => css`
		font-weight: 600;
		color: ${theme.palette.primary.main};
		margin-left: 10px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: 24px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: 28px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: 32px;
		}
	`
)

const LogoWrapper = styled(Link)(
	({ theme }) => css`
		display: flex;
		justify-content: flex-start;
		align-items: center;
		text-decoration: none;
		cursor: pointer;
	`
)

const Links = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(2, max-content);
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

const Prefix = styled('span')(
	({ theme }) => css`
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		opacity: 0.5;
		margin-left: 4px;
		color: ${theme.palette.text.disabled};
	`
)

const TitleWithPrefix = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
`
