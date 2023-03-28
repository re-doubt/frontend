import React, { FC, useMemo } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { ResponsiveLoader } from 'src/components/common/base/responsive-loader'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'
import { CustomTooltip } from './components/tooltip'

export const PlatformsRadar: FC = () => {
	const { isLoading, platforms } = useTypedSelector((state) => state.platforms)
	const { currencyMultiplier } = useTypedSelector((state) => state.settings)

	const fullMark = useMemo(() => {
		return platforms.reduce((prev, curr) => (curr.marketVolume * currencyMultiplier > prev ? curr.marketVolume * currencyMultiplier : prev), 0)
	}, [platforms, currencyMultiplier])

	const data = useMemo(() => {
		return platforms.map(({ name, marketVolume }) => ({
			name,
			marketVolume: marketVolume * currencyMultiplier,
			fullMark,
			formattedName: platformInfo?.[name].title || name
		}))
	}, [platforms, currencyMultiplier])

	if (isLoading) {
		return <ResponsiveLoader />
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
				<PolarGrid fontSize={12} />
				<PolarAngleAxis dataKey="formattedName" fontSize={12} />
				<PolarRadiusAxis fontSize={12} />
				<Radar name="Platform" dataKey="marketVolume" stroke="#0088CC" fill="#0088CC" fillOpacity={0.6} />
				<Tooltip content={CustomTooltip} />
			</RadarChart>
		</ResponsiveContainer>
	)
}
