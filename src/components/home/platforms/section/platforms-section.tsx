import { css, Skeleton, styled, Typography } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { useTypedSelector } from 'src/store/store'

const Description = styled(Typography)(
	({ theme }) =>
		css`
			color: ${theme.palette.text.disabled};
		`
)

const skeletonSX = { lineHeight: '32px', display: 'inline-block' }

export const PlatformsSection = () => {
	const platformsCount = useTypedSelector((state) => state.platforms).platforms.length
	const platformsLoading = useTypedSelector((state) => state.platforms.isLoading)

	return (
		<StyledSection>
			<Typography variant="h2">📈 Discover trading platforms</Typography>
			<Description>
				Today's top trading platforms in the TON ecosystem consist of {platformsLoading ? <Skeleton width="2ch" sx={skeletonSX} /> : platformsCount}{' '}
				entries
			</Description>
		</StyledSection>
	)
}
