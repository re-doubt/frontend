import { styled } from '@mui/material'
import { FC } from 'react'
import { PlatformsCharts } from './charts/charts'
import { PlatformsList } from './list/platforms-list'

const StyledPlatforms = styled('div')`
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 36px;
	align-items: flex-start;
`

export const PlatformsGrid: FC = () => {
	return (
		<StyledPlatforms>
			<PlatformsList />
			<PlatformsCharts />
		</StyledPlatforms>
	)
}
