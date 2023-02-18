import { Box, Link, styled, useTheme } from '@mui/material'
import { FC } from 'react'

const Logo = styled('img')`
	width: 30px;
	height: 30px;
`

const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(4, max-content);
	grid-gap: 20px;
	align-items: center;
`

const links = [
	{
		item: 'Documentation',
		link: 'https://github.com/re-doubt/.github/blob/main/profile/README.MD'
	},
	{
		item: 'Landing',
		link: 'https://redoubt.online'
	},
	{
		item: <Logo src="img/common/footer/github-logo.svg" />,
		link: 'https://github.com/re-doubt/'
	},
	{
		item: <Logo src="img/common/footer/telegram-logo.svg" />,
		link: 'https://t.me/re_doubt'
	}
]

const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Footer: FC = ({ ...rest }) => {
	const theme = useTheme()

	return (
		<Box display="flex" justifyContent="flex-end" alignItems="center" {...rest}>
			<Grid>
				{links.map(({ item, link }, i) => (
					<Box display="flex" justifyContent="center" alignItems="center" key={`link-${i}`}>
						<StyledLink href={link} target="_blank" color={theme.palette.text.primary}>
							{item}
						</StyledLink>
					</Box>
				))}
			</Grid>
		</Box>
	)
}
