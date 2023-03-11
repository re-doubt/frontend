import { FC, ReactNode, useEffect, useState } from 'react'
import { Header } from 'src/components/common/header/header'

import '../styles/reset.css'
import '../styles/globals.css'
import { css, styled } from '@mui/material/styles'
import { Footer } from 'src/components/common/footer/footer'
import { SubHeader } from 'src/components/common/sub-header/sub-header'
import { useGetJettonsQuery } from 'src/api/rtk'
import { useDispatch } from 'react-redux'
import { jettonsActions } from 'src/store/jettons-slice'
import { platformsActions } from 'src/store/platforms-slice'
import { volumeActions } from 'src/store/volume-slice'
import { gridGap } from 'src/components/common/css/responsive'

interface IBaseLayout {
	children: ReactNode
}

const StyledLayout = styled('div')(
	({ theme }) => css`
		padding: 30px 60px;
		@media (max-width: ${theme.breakpoints.values.xl}px) {
			padding: 20px 40px;
		}

		@media (max-width: ${theme.breakpoints.values.lg}px) {
			padding: 10px 20px;
		}
	`
)

const Main = styled('main')(
	({ theme }) => css`
		padding: 36px 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 36px;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			grid-gap: ${gridGap.xs};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			grid-gap: ${gridGap.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			grid-gap: ${gridGap.lg};
		}
	`
)

export const BaseLayout: FC<IBaseLayout> = ({ children, ...rest }) => {
	const { data, isSuccess } = useGetJettonsQuery('')
	const dispatch = useDispatch()

	useEffect(() => {
		if (isSuccess) {
			dispatch(jettonsActions.setJettons(data.jettons))
			dispatch(jettonsActions.setLoading(false))
			dispatch(platformsActions.setPlatforms(data.platforms))
			dispatch(platformsActions.setLoading(false))
			dispatch(volumeActions.setVolume(data.total))
			dispatch(volumeActions.setLoading(false))
		}
	}, [isSuccess])

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
