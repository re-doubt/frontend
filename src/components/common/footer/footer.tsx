import { Box, css, Divider, Link, Stack, styled, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { bodyFontSize2, gridGap } from '../css/responsive'
import { Logo } from '../logo/Logo'

const Grid = styled('div')`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 60px;
	align-items: flex-start;
`

const LinksGrid = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: flex-start;
		justify-items: flex-end;

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

const docsLinks = [
	{
		item: 'TONAlytica',
		link: 'https://docs.redoubt.online/'
	},
	{
		item: 'GitHub',
		link: 'https://github.com/re-doubt/'
	}
]

const pageLinks = [
	{
		item: 'Jettons',
		link: '/jettons'
	},
	{
		item: 'Platforms',
		link: '/platforms'
	},
	{
		item: 'NFTs',
		link: '/nfts',
		disabled: true
	}
]

const socialLinks = [
	{
		item: 'Telegram',
		link: 'https://t.me/re_doubt'
	},
	{
		item: 'Twitter',
		link: 'https://t.me/re_doubt'
	},
	{
		item: 'LinkedIn',
		link: 'https://t.me/re_doubt'
	}
]

const projectsLinks = [
	{
		item: 're:doubt',
		link: 'http://app.redoubt.online'
	},
	{
		item: 'TONAlytica',
		link: 'http://tonalytica.redoubt.online'
	},
	{
		item: 'Jetton Price Alerts',
		link: 'https://t.me/JettonAlertsBot'
	},
	{
		item: 'ChartingView',
		link: 'https://redoubt.online',
		disabled: true
	}
]

const StyledLink = styled(Link)(
	({ theme }) => css`
		text-decoration: none;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: 10px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: 12px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: 14px;
		}
	`
)

const gap = { xs: '4px', md: '8px', lg: '12px' }

export const Footer: FC = ({ ...rest }) => {
	const theme = useTheme()

	return (
		<Stack marginTop="60px" gap={gridGap}>
			<Grid>
				<Stack gap={gap}>
					<Logo size="sm" />
					<Typography variant="body2">
						re:doubt is a powerful tool for TON blockchain research, complete with all the tools you need to discover, explore, and visualize vast
						amounts of blockchain data.
					</Typography>
				</Stack>

				<LinksGrid>
					<Stack gap={gap}>
						<Typography variant="h4" fontSize={bodyFontSize2}>
							DOCS
						</Typography>

						<Stack gap={gap}>
							{docsLinks.map(({ item, link }, i) => (
								<StyledLink href={link} target="_blank" color={theme.palette.text.primary} key={`footer-link-${i}`}>
									{item}
								</StyledLink>
							))}
						</Stack>
					</Stack>

					<Stack gap={gap}>
						<Typography variant="h4" fontSize={bodyFontSize2}>
							EXPLORE
						</Typography>

						{pageLinks.map(({ item, link, disabled }, i) =>
							!disabled ? (
								<StyledLink href={link} target="_blank" color={theme.palette.text.primary} key={`footer-link-${i}`}>
									{item}
								</StyledLink>
							) : (
								<Typography key={`footer-link-${i}`} color={theme.palette.grey[500]} variant="body2">
									{item}
								</Typography>
							)
						)}
					</Stack>

					<Stack gap={gap}>
						<Typography variant="h4" fontSize={bodyFontSize2}>
							PROJECTS
						</Typography>

						<Stack gap={gap}>
							{projectsLinks.map(({ item, link, disabled }, i) =>
								!disabled ? (
									<StyledLink href={link} target="_blank" color={theme.palette.text.primary} key={`footer-link-${i}`}>
										{item}
									</StyledLink>
								) : (
									<Typography key={`footer-link-${i}`} color={theme.palette.grey[500]} variant="body2">
										{item}
									</Typography>
								)
							)}
						</Stack>
					</Stack>

					<Stack gap={gap}>
						<Typography variant="h4" fontSize={bodyFontSize2}>
							CONNECT
						</Typography>

						<Stack gap={gap} alignItems="flex-end">
							{socialLinks.map(({ item, link }, i) => (
								<StyledLink href={link} target="_blank" color={theme.palette.text.primary} key={`footer-link-${i}`}>
									{item}
								</StyledLink>
							))}
						</Stack>
					</Stack>
				</LinksGrid>
			</Grid>
			<Divider />
			<Stack alignItems="flex-end">
				<Typography variant="body2" color="text.disabled">
					re:doubt team @ 2023. All rights reserved.
				</Typography>
			</Stack>
		</Stack>
	)
}
