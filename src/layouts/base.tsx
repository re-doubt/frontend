import { Box } from '@mui/system'
import { FC, ReactNode } from 'react'

interface IBaseLayout {
	children: ReactNode
}

export const BaseLayout: FC<IBaseLayout> = ({ children, ...rest }) => {
	return <Box {...rest}>{children}</Box>
}
