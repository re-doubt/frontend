import { css, Skeleton, styled, Typography } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { Price } from 'src/components/common/format/price'
import { useTypedSelector } from 'src/store/store'

const Description = styled(Typography)(
	({ theme }) =>
		css`
			line-height: 1.5;
			color: ${theme.palette.text.disabled};
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
			<Typography variant="h2">💵 Discover top Jettons</Typography>
			<Description>
				Today's most popular TON assets are {jettonsLoading ? <Skeleton width="2ch" sx={skeletonSX} /> : jettonCount} jettons with total{' '}
				{volumeLoading ? <Skeleton width="6ch" sx={skeletonSX} /> : <Price value={volume} />} trading volume
			</Description>
		</StyledSection>
	)
}
