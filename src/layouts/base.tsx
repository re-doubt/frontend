import { FC, ReactNode } from 'react'
import { Header } from 'src/components/common/header/header'

import '../styles/reset.css'
import '../styles/globals.css'
import { styled } from '@mui/material/styles'

interface IBaseLayout {
	children: ReactNode
}

const StyledLayout = styled('main')(
	({ theme }) => `
	padding: 60px;
	@media (max-width: ${theme.breakpoints.values.xl}px) {
		padding: 40px
	}

	@media (max-width: ${theme.breakpoints.values.lg}px) {
		padding: 20px
	}
`
)

export const BaseLayout: FC<IBaseLayout> = ({ children, ...rest }) => {
	return (
		<StyledLayout {...rest}>
			{/* Header section */}
			<Header />

			{/* Main section */}
			{children}

			{/* Footer section */}
		</StyledLayout>
	)
}
