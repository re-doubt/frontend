import * as React from 'react'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.text.primary,
		borderRadius: '12px',
		boxShadow: '8px 8px 5px rgba(0, 0, 0, 0.03)',
		padding: '16px',
		fontSize: '14px',
		lineHeight: 1.5
	}
}))
