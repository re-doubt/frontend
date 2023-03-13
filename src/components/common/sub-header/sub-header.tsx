import { css, IconButton, Skeleton, SkeletonProps, Stack, StackProps, styled, Tooltip, Typography } from '@mui/material'
import { FC } from 'react'
import { useTypedSelector } from 'src/store/store'
import { bodyFontSize, gridGap } from '../css/responsive'
import { Price } from '../format/price'
import { CurrecySelect } from './currency/select'
import InfoIcon from '@mui/icons-material/Info'
import { LightTooltip } from '../base/tooltip'
import { JettonMarquee } from './marquees/ranking'
import { PlatformsMarquee } from './marquees/platforms'
interface ISubHeader {}

const StyledSub = styled('section')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Text = styled(Typography)(
	({ theme }) => css`
		color: ${theme.palette.text.disabled};
		line-height: 32px;
	`
)

const Span = styled(Text)(
	({ theme }) => `
	color: ${theme.palette.primary.main};
`
)

const Currency = styled('div')`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const CurrencyLabel = styled(Text)(
	({ theme }) => css`
		margin-right: 16px;

		@media (max-width: ${theme.breakpoints.values.md}px) {
			display: none;
		}
	`
)

const Marquees = styled('div')(
	({ theme }) => css`
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2, 1fr);

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

export const SubHeader: FC<ISubHeader> = () => {
	const { platforms, volume, jettons } = useTypedSelector((state) => state)
	const jettonCount = jettons.jettons.length
	const platformCount = platforms.platforms.length
	const volumeCount = volume.totalVolume

	return (
		<>
			<StyledSub>
				<Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} gap={{ xs: 0, md: gridGap.md, lg: gridGap.lg }}>
					<Stack {...paramProps}>
						<Stack direction="row" alignItems="center">
							<Text>Top Jettons:</Text>
							<LightTooltip title={<TooltipText />} color="primary">
								<IconButton sx={{ p: '0 0 0 4px' }}>
									<InfoIcon fontSize="small" />
								</IconButton>
							</LightTooltip>
						</Stack>
						{jettons.isLoading ? <Skeleton {...skeletonProps} /> : <Span sx={{ color: 'main' }}>{jettonCount}</Span>}
					</Stack>

					<Stack {...paramProps}>
						<Text>Platforms:</Text>
						{platforms.isLoading ? <Skeleton {...skeletonProps} /> : <Span sx={{ color: 'main' }}>{platformCount}</Span>}
					</Stack>

					<Stack {...paramProps}>
						<Text>Total volume:</Text>
						{platforms.isLoading ? (
							<Skeleton {...skeletonProps} width="6ch" />
						) : (
							<Span sx={{ color: 'main' }}>
								<Price value={volumeCount} />
							</Span>
						)}
					</Stack>
				</Stack>

				<Currency>
					<CurrencyLabel>Currency:</CurrencyLabel>
					<CurrecySelect />
				</Currency>
			</StyledSub>

			<Marquees>
				<JettonMarquee />
				<PlatformsMarquee />
			</Marquees>
		</>
	)
}

const paramProps: StackProps = {
	direction: 'row',
	gap: '.8rem',
	alignItems: 'center'
}

const skeletonProps: SkeletonProps = {
	width: '2ch',
	sx: {
		fontSize: '18px',
		lineHeight: '32px'
	}
}

const TooltipText: FC = () => {
	return (
		<Typography>
			Jettons with trading volume of more than <Price value={300} />
		</Typography>
	)
}
