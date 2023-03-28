import { Button, TextField, Stack, Typography, styled, css } from '@mui/material'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { borderRadius, gap } from 'src/components/common/css/responsive'
import { settingsActions } from 'src/store/settings-slice'
import { useTypedSelector } from 'src/store/store'

const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

const StyledInput = styled(TextField)(({ theme }) => ({
	textDecoration: 'none',
	boxShadow: '8px 8px 5px rgba(0, 0, 0, 0.03)',
	[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
		'& fieldset': {
			borderRadius: borderRadius.xs
		}
	},
	[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
		'& fieldset': {
			borderRadius: borderRadius.md
		}
	},
	[`@media (min-width: ${theme.breakpoints.values.xs}lg)`]: {
		'& fieldset': {
			borderRadius: borderRadius.lg
		}
	}
}))

const StyledButton = styled(Button)(({ theme }) => ({
	textDecoration: 'none',
	boxShadow: '8px 8px 5px rgba(0, 0, 0, 0.03)',
	[`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
		borderRadius: borderRadius.xs
	},
	[`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
		borderRadius: borderRadius.md
	},
	[`@media (min-width: ${theme.breakpoints.values.xs}lg)`]: {
		borderRadius: borderRadius.lg
	}
}))

export const SettingsForm: FC = () => {
	const dispatch = useDispatch()
	const { minVolume } = useTypedSelector((state) => state.settings)
	const [newVol, setNewVol] = useState<number>(minVolume)

	const onClick = () => {
		dispatch(settingsActions.setMinVolume(newVol))
	}

	return (
		<>
			<Grid>
				<Stack direction="row" gap={gap} alignItems="center">
					<Typography>Minimum trading volume:</Typography>
					<StyledInput
						value={newVol}
						onChange={(e) => setNewVol(parseInt(e.target.value, 10))}
						label="Volume"
						type="number"
						variant="outlined"
						size="small"
					/>
				</Stack>

				<Stack direction="row" gap={gap} alignItems="center" justifyContent="flex-end">
					<Typography>Current value:</Typography>
					<Typography color="primary">{minVolume}</Typography>
				</Stack>
			</Grid>
			<Stack alignItems="flex-end">
				<StyledButton variant="outlined" onClick={onClick}>
					Save
				</StyledButton>
			</Stack>
		</>
	)
}
