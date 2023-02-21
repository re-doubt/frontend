import { styled } from '@mui/material'
import { FC } from 'react'
import { getColorForPercentage } from 'src/utils/getColor'

const StyledChange = styled('div', {
	shouldForwardProp: (prop) => prop !== 'impact'
})<{ percentage: number | null }>(
	({ percentage, theme }) => `
     background-color: ${getColorForPercentage(theme, percentage)};
     border-radius: 16px;
     padding: 2px 6px;
     font-size: 12px;
     height: fit-content;
     color: #fff;
   `
)

interface IChange {
	percentage: number | null
}

export const ChangeBadge: FC<IChange> = ({ percentage }) => {
	return (
		<StyledChange percentage={percentage}>
			{percentage === null ? 'New 🔥' : percentage}
			{percentage !== null && '%'}
		</StyledChange>
	)
}
