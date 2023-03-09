import { Skeleton, styled } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { Title } from 'src/components/common/base/title'
import { useTypedSelector } from 'src/store/store'

const Description = styled('p')(
	({ theme }) =>
		`
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.palette.text.disabled}
    `
)

const skeletonSX = { lineHeight: '32px', display: 'inline-block' }

export const PlatformsSection = () => {
	const platformsCount = useTypedSelector((state) => state.platforms).platforms.length
	const platformsLoading = useTypedSelector((state) => state.platforms.isLoading)

	return (
		<StyledSection>
			<Title>📈 Discover trading platforms</Title>
			<Description>
				Today's top trading platforms in the TON ecosystem consist of {platformsLoading ? <Skeleton width="2ch" sx={skeletonSX} /> : platformsCount}{' '}
				entries
			</Description>
		</StyledSection>
	)
}
