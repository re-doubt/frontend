import { css, styled } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type LogoSize = 'sm' | 'md'

const StyledLogo = styled('img')<{ size: LogoSize }>(
	({ theme, size }) => css`
		@media (min-width: ${theme.breakpoints.values.xs}px) {
			width: ${size === 'sm' ? '15' : '30'}px;
			height: ${size === 'sm' ? '15' : '30'}px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			width: ${size === 'sm' ? '22' : '40'}px;
			height: ${size === 'sm' ? '22' : '40'}px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			width: ${size === 'sm' ? '30' : '50'}px;
			height: ${size === 'sm' ? '30' : '50'};
		}
	`
)

const Title = styled('h3')<{ size: LogoSize }>(
	({ theme, size }) => css`
		font-weight: 600;
		color: ${theme.palette.primary.main};
		margin-left: 10px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${size === 'sm' ? '18' : '24'}px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${size === 'sm' ? '22' : '28'};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${size === 'sm' ? '26' : '32'};
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

const Prefix = styled('span')<{ size: LogoSize }>(
	({ theme, size }) => css`
		font-weight: 400;
		font-size: 12px;
		line-height: ${size === 'sm' ? '12' : '16'}px;
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

interface ILogo {
	size?: LogoSize
}

export const Logo: FC<ILogo> = ({ size = 'md' }) => {
	return (
		<LogoWrapper to="/">
			<StyledLogo size={size} src="img/common/header/logo.svg" />
			<TitleWithPrefix>
				<Title size={size}>re:doubt</Title>
				<Prefix size={size}>v.0.1</Prefix>
			</TitleWithPrefix>
		</LogoWrapper>
	)
}
