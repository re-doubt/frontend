import { css, Skeleton, styled } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { Title } from 'src/components/common/base/title'
import { bodyFontSize } from 'src/components/common/css/responsive'
import { useTypedSelector } from 'src/store/store'

const Description = styled('p')(
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
