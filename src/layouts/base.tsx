import { FC, ReactNode } from 'react'
import { Header } from 'src/components/common/header/header'

import '../styles/reset.css'
import '../styles/globals.css'
import { styled } from '@mui/material/styles'
import { Footer } from 'src/components/common/footer/footer'

interface IBaseLayout {
	children: ReactNode
}

const StyledLayout = styled('div')(
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

const Main = styled('main')`
	padding: 36px 0;
`

export const BaseLayout: FC<IBaseLayout> = ({ children, ...rest }) => {
	return (
		<StyledLayout {...rest}>
			{/* Header section */}
			<Header />

			{/* Main section */}
			<Main>{children}</Main>

			{/* Footer section */}
			<Footer />
		</StyledLayout>
	)
}
