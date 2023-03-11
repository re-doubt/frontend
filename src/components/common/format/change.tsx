import { css, styled, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { bodyFontSize } from '../css/responsive'
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

const Text = styled('div')(
	({ theme }) => css`
		color: ${theme.palette.text.disabled};
		line-height: 32px;
		margin-right: 8px;
		display: inline-block;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${bodyFontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${bodyFontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${bodyFontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${bodyFontSize.lg};
		}
	`
)

export const Change: FC<IChange> = ({ percentage, value }) => {
	return (
		<StyledChange>
			<Text>{value}</Text>
			<ChangeBadge percentage={percentage} />
		</StyledChange>
	)
}
