import { useMediaQuery, useTheme } from '@mui/material'
import { ResponsiveValue } from 'src/components/common/css/responsive'

export const useBreakpointValue = <T,>(value: ResponsiveValue<T>): T => {
	const theme = useTheme()
	const medium = useMediaQuery(theme.breakpoints.up('md'))
	const large = useMediaQuery(theme.breakpoints.up('lg'))
	const small = useMediaQuery(theme.breakpoints.up('sm'))

	if (large) {
		return value.lg
	}

	if (medium) {
		return value.md
	}

	if (small && value?.sm) {
		return value.sm
	}

	return value.xs
}
