import { css, Skeleton, styled } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { Title } from 'src/components/common/base/title'
import { bodyFontSize } from 'src/components/common/css/responsive'
import { Price } from 'src/components/common/format/price'
import { useTypedSelector } from 'src/store/store'

const Description = styled('div')(
	({ theme }) =>
		css`
			line-height: 1.5;
			color: ${theme.palette.text.disabled};

			@media (min-width: ${theme.breakpoints.values.xs}px) {
				font-size: ${bodyFontSize.xs};
			}

			@media (min-width: ${theme.breakpoints.values.sm}px) {
				font-size: ${bodyFontSize.sm};
			}

			@media (min-width: ${theme.breakpoints.values.md}px) {
				font-size: ${bodyFontSize.md};
			}

			@media (min-width: ${theme.breakpoints.values.lg}px) {
				font-size: ${bodyFontSize.lg};
			}
		`
)

const skeletonSX = { lineHeight: '32px', display: 'inline-block' }

export const JettonsSection = () => {
	const jettonCount = useTypedSelector((state) => state.jettons).jettons.length
	const volume = useTypedSelector((state) => state.volume.totalVolume)
	const volumeLoading = useTypedSelector((state) => state.volume.isLoading)
	const jettonsLoading = useTypedSelector((state) => state.jettons.isLoading)

	return (
		<StyledSection>
			<Title>💵 Discover top Jettons</Title>
			<Description>
				Today's most popular TON assets are {jettonsLoading ? <Skeleton width="2ch" sx={skeletonSX} /> : jettonCount} jettons with total{' '}
				{volumeLoading ? <Skeleton width="6ch" sx={skeletonSX} /> : <Price value={volume} />} trading volume
			</Description>
		</StyledSection>
	)
}
