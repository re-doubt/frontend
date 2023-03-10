import { css, Skeleton, SkeletonProps, Stack, StackProps, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { useTypedSelector } from 'src/store/store'
import { bodyFontSize, gridGap } from '../css/responsive'
import { Price } from '../format/price'
import { CurrecySelect } from './currency/select'

interface ISubHeader {}

const StyledSub = styled('section')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0 0 0;
`

const Text = styled(Typography)(
	({ theme }) => css`
		color: ${theme.palette.text.disabled};
		line-height: 32px;
		:last-child {
			margin-left: 0;
		}

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${bodyFontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${bodyFontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${bodyFontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${bodyFontSize.lg};
		}
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

const CurrencyLabel = styled('label')`
	margin-right: 16px;
`

export const SubHeader: FC<ISubHeader> = () => {
	const { platforms, volume, jettons } = useTypedSelector((state) => state)
	const jettonCount = jettons.jettons.length
	const platformCount = platforms.platforms.length
	const volumeCount = volume.totalVolume

	return (
		<StyledSub>
			<Stack direction="row" alignItems="center" gap={{ xs: gridGap.xs, md: gridGap.md, lg: gridGap.lg }}>
				<Stack {...paramProps}>
					<Text>Jettons:</Text>
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
