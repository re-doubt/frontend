import { css, Link, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { StyledSection } from 'src/components/common/base/section'
import { SubTitle } from 'src/components/common/base/subtitle'
import { h3FontSize, ResponsiveValue } from 'src/components/common/css/responsive'
import { Price } from 'src/components/common/format/price'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'

const H3 = styled(Link)(
	({ theme }) => css`
		font-weight: 600;
		line-height: 24px;
		font-size: 20px;
		text-decoration: none;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${h3FontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${h3FontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${h3FontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${h3FontSize.lg};
		}
	`
)

const stackGap: ResponsiveValue<string> = {
	xs: '0',
	md: '4px',
	lg: '8px'
}

export const PlatformsList: FC = () => {
	const { platforms, isLoading } = useTypedSelector((state) => state.platforms)

	if (isLoading) {
		return (
			<StyledSection>
				<SubTitle>List</SubTitle>

				<Stack direction="column" gap={stackGap}>
					{Array.from(Array(8)).map((el, i) => (
						<Skeleton width={`${i}ch`} key={`platforms-skeleton-${i}`} />
					))}
				</Stack>
			</StyledSection>
		)
	}

	return (
		<StyledSection>
			<SubTitle>List</SubTitle>

			<Stack direction="column" gap={stackGap}>
				{platforms
					.filter((el) => Object.keys(platformInfo).includes(el.name))
					.map((platform, i) => (
						<Stack key={`platform-${i}`} direction="row" gap="10px" alignItems="center">
							<H3 href={platformInfo[platform.name].link}>{platformInfo[platform.name].title}</H3>
							<Price value={platform.marketVolume} />
						</Stack>
					))}
			</Stack>
		</StyledSection>
	)
}
