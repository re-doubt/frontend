import { css, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { StyledSection } from 'src/components/common/base/section'
import { PlatformsPie } from './pie'
import { PlatformsRadar } from './radar'

const Charts = styled('div')(
	({ theme }) => css`
		display: grid;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			grid-gap: 12px;
			grid-template-columns: 1fr;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			grid-gap: 14px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			grid-gap: 16px;
		}
	`
)

const ChartWrapper = styled('div')(
	({ theme }) => css`
		@media (min-width: ${theme.breakpoints.values.xs}px) {
			min-height: 170px;
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			min-height: 200px;
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			min-height: 300px;
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			min-height: 350px;
		}
	`
)

export const PlatformsCharts: FC = () => {
	return (
		<StyledSection>
			<Typography variant="h4">Charts</Typography>

			<Charts>
				<ChartWrapper>
					<PlatformsPie />
				</ChartWrapper>

				<ChartWrapper>
					<PlatformsRadar />
				</ChartWrapper>
			</Charts>
		</StyledSection>
	)
}
