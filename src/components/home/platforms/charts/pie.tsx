import React, { FC, useMemo } from 'react'
import { ResponsiveContainer, Tooltip, PieChart, Pie } from 'recharts'
import { ResponsiveLoader } from 'src/components/common/base/responsive-loader'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'
import { CustomTooltip } from './components/tooltip'

export const PlatformsPie: FC = () => {
	const { isLoading, platforms } = useTypedSelector((state) => state.platforms)
	const { currencyMultiplier } = useTypedSelector((state) => state.settings)

	const totalVolume = useMemo(() => {
		return platforms.reduce((prev, curr) => prev + curr.marketVolume, 0)
	}, [platforms, currencyMultiplier])

	const fullMark = useMemo(() => {
		return platforms.reduce((prev, curr) => (curr.marketVolume * currencyMultiplier > prev ? curr.marketVolume * currencyMultiplier : prev), 0)
	}, [platforms, currencyMultiplier])

	const data = useMemo(() => {
		return platforms.map(({ name, marketVolume }) => ({
			name,
			marketVolume: marketVolume * currencyMultiplier,
			fullMark,
			percentage: Math.ceil((marketVolume / totalVolume) * 100),
			totalVolume
		}))
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
					labelLine={RenderCustomizedLabelLine}
					label={RenderLabel2}
				/>
				<Tooltip content={CustomTooltip} />
			</PieChart>
		</ResponsiveContainer>
	)
}

let RenderCustomizedLabelLine = function (props: any) {
	return props.value !== 0 && props.index <= 5 ? (
		<path
			stroke={props.stroke}
			d={`M${props.points[0].x},${props.points[0].y}L${props.points[1].x},${props.points[1].y}`}
			className="customized-label-line"
		/>
	) : (
		<polyline stroke={props.stroke} fill="none" />
	)
}

let RenderLabel2 = function (props: any) {
	const RADIAN = Math.PI / 180
	const radius = 25 + props.innerRadius + (props.outerRadius - props.innerRadius)
	const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN)
	const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN)

	return props.value !== 0 && props.index <= 5 ? (
		<text
			className="recharts-text recharts-pie-label-text"
			x={x}
			y={y}
			fontSize="12"
			fontFamily="sans-serif"
			dominantBaseline="central"
			cy={props.cy}
			cx={props.cx}
			fill="#666"
			textAnchor={props.x > props.cx ? 'start' : 'end'}
		>
			{platformInfo[props.payload.name].title}: {props.payload.percentage}%
		</text>
	) : (
		<g>
			<text x={500} y={y} fill="#transparent" rotate="90"></text>
		</g>
	)
}
