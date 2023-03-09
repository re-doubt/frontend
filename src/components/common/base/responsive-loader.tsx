import { Box, CircularProgress } from '@mui/material'
import { FC } from 'react'

export const ResponsiveLoader: FC = () => (
	<Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
		<CircularProgress />
	</Box>
)
