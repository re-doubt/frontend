import { css, styled } from '@mui/material'
import { FC } from 'react'
import { gridGap } from 'src/components/common/css/responsive'
import { PlatformsCharts } from './charts/charts'
import { PlatformsList } from './list/platforms-list'

const StyledPlatforms = styled('div')(
	({ theme }) => css`
		display: grid;
		gap: 36px;
		align-items: flex-start;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			gap: ${gridGap.xs};
			grid-template-columns: 1fr;
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			gap: ${gridGap.xs};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			gap: ${gridGap.xs};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			gap: ${gridGap.xs};
			grid-template-columns: 1fr 2fr;
		}
	`
)

export const PlatformsGrid: FC = () => {
	return (
		<StyledPlatforms>
			<PlatformsList />
			<PlatformsCharts />
		</StyledPlatforms>
	)
}
