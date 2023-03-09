import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box, css } from '@mui/system'
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

const Logo = styled('img')`
	width: 50px;
	height: 50px;
`

const Title = styled('h3')(
	({ theme }) => `
	font-weight: 600;
	font-size: 32px;
	color: ${theme.palette.primary.main};
	margin-left: 10px;
`
)

const LogoWrapper = styled(Link)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
`
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
