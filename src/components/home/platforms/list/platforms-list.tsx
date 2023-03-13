import { css, Link, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { H3, H3Link } from 'src/components/common/base/h3'
import { StyledSection } from 'src/components/common/base/section'
import { h3FontSize, ResponsiveValue } from 'src/components/common/css/responsive'
import { Price } from 'src/components/common/format/price'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'

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
				<Typography variant="h4">List</Typography>

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
			<Typography variant="h4">List</Typography>

			<Stack direction="column" gap={stackGap}>
				{platforms
					.filter((el) => Object.keys(platformInfo).includes(el.name))
					.map((platform, i) => (
						<Stack key={`platform-${i}`} direction="row" gap="10px" alignItems="center">
							<H3Link href={platformInfo[platform.name].link}>{platformInfo[platform.name].title}</H3Link>
							<Price value={platform.marketVolume} />
						</Stack>
					))}
			</Stack>
		</StyledSection>
	)
}
