import { FC, ReactNode } from 'react'
import { Header } from 'src/components/common/header/header'

import '../styles/reset.css'
import '../styles/globals.css'
import { styled } from '@mui/material/styles'
import { Footer } from 'src/components/common/footer/footer'
import { SubHeader } from 'src/components/common/sub-header/sub-header'
import { useGetJettonsQuery } from 'src/api/rtk'

interface IBaseLayout {
	children: ReactNode
}

const StyledLayout = styled('div')(
	({ theme }) => `
	padding: 30px 60px;
	@media (max-width: ${theme.breakpoints.values.xl}px) {
		padding: 20px 40px
	}

	@media (max-width: ${theme.breakpoints.values.lg}px) {
		padding: 10px 20px
	}
`
)

const Main = styled('main')`
	padding: 36px 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 36px;
`

export const BaseLayout: FC<IBaseLayout> = ({ children, ...rest }) => {
	return (
		<StyledLayout {...rest}>
			{/* Header section */}
			<Header />
			<SubHeader />

			{/* Main section */}
			<Main>{children}</Main>

			{/* Footer section */}
			<Footer />
		</StyledLayout>
	)
}
