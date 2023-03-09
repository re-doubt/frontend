import { styled } from '@mui/material'
import { FC } from 'react'
import { StyledSection } from 'src/components/common/base/section'
import { SubTitle } from 'src/components/common/base/subtitle'
import { PlatformsPie } from './pie'
import { PlatformsRadar } from './radar'

const Charts = styled('div')`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 16px;
`

const ChartWrapper = styled('div')`
	min-height: 300px;
`

export const PlatformsCharts: FC = () => {
	return (
		<StyledSection>
			<SubTitle>Charts</SubTitle>

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
