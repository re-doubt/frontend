import { Theme } from '@mui/material'

export const getColorForPercentage = (theme: Theme, percent: null | number) => {
	if (percent === null || percent === 0) {
		return theme.palette.primary.main
	}

	if (percent > 0) {
		return theme.palette.success.main
	}

	if (percent < 0) {
		return theme.palette.error.main
	}

	return theme.palette.primary.light
}
