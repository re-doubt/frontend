import { styled } from '@mui/material'
import { FC } from 'react'

const StyledChange = styled('div', {
	shouldForwardProp: (prop) => prop !== 'impact'
})<{ impact: boolean }>(
	({ impact, theme }) => `
     background-color: ${impact ? theme.palette.success.main : theme.palette.error.main};
     border-radius: 16px;
     padding: 2px 6px;
     font-size: 12px;
     height: fit-content;
     color: #fff;
   `
)

interface IChange {
	percentage: number
}

export const ChangeBadge: FC<IChange> = ({ percentage }) => {
	return <StyledChange impact={percentage > 0}>{percentage}%</StyledChange>
}
