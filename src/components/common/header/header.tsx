import { styled, css } from '@mui/material/styles'
import { FC } from 'react'
import { Link } from 'react-router-dom'

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

const Links = styled('div')`
	display: grid;
	grid-template-columns: repeat(2, max-content);
	grid-gap: 32px;
	align-items: center;
`

const StyledLink = styled(Link)(
	({ theme }) => css`
		font-weight: 600;
		font-size: 20px;
		line-height: 24px;
		text-decoration: none;
		cursor: pointer;
		color: ${theme.palette.text.primary};
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
