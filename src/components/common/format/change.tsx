import { styled } from '@mui/material'
import { FC, ReactNode } from 'react'
import { ChangeBadge } from './change-badge'

interface IChange {
	percentage: number
	value: number | string | ReactNode
}

const StyledChange = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const Value = styled('p')`
	margin-right: 8px;
`

export const Change: FC<IChange> = ({ percentage, value }) => {
	return (
		<StyledChange>
			<Value>{value}</Value>
			<ChangeBadge percentage={percentage} />
		</StyledChange>
	)
}
