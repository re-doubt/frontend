import { Skeleton, styled } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { Price } from 'src/components/common/format/price'
import { useTypedSelector } from 'src/store/store'

const Title = styled('h1')`
	font-weight: 600;
	font-size: 24px;
	line-height: 34px;
	margin-bottom: 4px;
`

const Description = styled('p')(
	({ theme }) =>
		`
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.palette.text.disabled}
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
