import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { FC } from 'react'

export const Header: FC = () => {
	return (
		<StyledHeader>
			<LogoWrapper>
				<Logo src="img/common/header/logo.svg" />
				<Title>re:doubt</Title>
			</LogoWrapper>

			{/* Button in design here, but we don't have the feature yet */}
		</StyledHeader>
	)
}

const StyledHeader = styled('header')`
	display: flex;
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
	line-height: 32px;
	color: ${theme.palette.primary.main};
	margin-left: 10px;
`
)

const LogoWrapper = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`
