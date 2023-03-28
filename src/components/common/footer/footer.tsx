import { Box, css, Divider, Link, Stack, styled, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { bodyFontSize2, gridGap, gap } from '../css/responsive'
import { Logo } from '../logo/Logo'

const Grid = styled('div')(
	({ theme }) => css`
		display: grid;
		grid-gap: 60px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			grid-gap: ${gridGap.xs};
			grid-template-columns: 1fr;
			margin: 0 auto;
			max-width: 560px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			grid-gap: ${gridGap.md};
			grid-template-columns: 1fr 3fr;
			align-items: flex-start;
			max-width: initial;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			grid-gap: ${gridGap.lg};
		}
	`
)

const LinksGrid = styled('div')(
	({ theme }) => css`
		display: grid;
		align-items: flex-start;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			grid-gap: ${gridGap.xs};
			grid-template-columns: repeat(2, 1fr);
			justify-items: flex-start;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			grid-gap: ${gridGap.md};
			grid-template-columns: repeat(4, 1fr);
			justify-items: flex-end;
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
		link: 'https://twitter.com/redoubt_web3'
	},
	{
		item: 'LinkedIn',
		link: 'https://www.linkedin.com/company/re-doubt/'
	}
]

const projectsLinks = [
	{
		item: 're:doubt',
		link: 'http://app.redoubt.online'
	},
	{
		item: 'TONAlytica',
		link: 'https://tonalytica.redoubt.online'
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

					<Stack gap={gap} alignItems={{ xs: 'flex-end', md: 'flex-end' }} justifySelf={{ xs: 'flex-end', md: 'initial' }}>
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

					<Stack gap={gap} alignItems={{ xs: 'flex-end', md: 'flex-end' }} justifySelf={{ xs: 'flex-end', md: 'initial' }}>
						<Typography variant="h4" fontSize={bodyFontSize2}>
							CONNECT
						</Typography>

						<Stack gap={gap}>
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
			<Stack alignItems={{ xs: 'center', md: 'flex-end' }} justifyContent={{ base: 'center' }}>
				<Typography variant="body2" color="text.disabled" width="fit-content">
					re:doubt team @ 2023. All rights reserved.
				</Typography>
			</Stack>
		</Stack>
	)
}
