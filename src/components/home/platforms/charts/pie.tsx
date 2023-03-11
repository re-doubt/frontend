import React, { FC, useMemo } from 'react'
import { ResponsiveContainer, Tooltip, PieChart, Pie } from 'recharts'
import { ResponsiveLoader } from 'src/components/common/base/responsive-loader'
import { useTypedSelector } from 'src/store/store'

export const PlatformsPie: FC = () => {
	const { isLoading, platforms } = useTypedSelector((state) => state.platforms)
	const { currencyMultiplier } = useTypedSelector((state) => state.settings)

	const fullMark = useMemo(() => {
		return platforms.reduce((prev, curr) => (curr.marketVolume * currencyMultiplier > prev ? curr.marketVolume * currencyMultiplier : prev), 0)
	}, [platforms, currencyMultiplier])

	const data = useMemo(() => {
		return platforms.map(({ name, marketVolume }) => ({ name, marketVolume: marketVolume * currencyMultiplier, fullMark }))
	}, [platforms, currencyMultiplier])

	if (isLoading) {
		return <ResponsiveLoader />
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={data}
					nameKey="name"
					dataKey="marketVolume"
					cx="50%"
					cy="50%"
					fill="#0088CC"
					fillOpacity={0.6}
					label={({ index }) => data[index].name}
				/>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	)
}
