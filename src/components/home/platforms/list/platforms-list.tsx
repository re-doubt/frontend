import { css, Link, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { StyledSection } from 'src/components/common/base/section'
import { ResponsiveValue } from 'src/components/common/css/responsive'
import { Price } from 'src/components/common/format/price'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'

const stackGap: ResponsiveValue<string> = {
	xs: '4px',
	md: '8px',
	lg: '12px'
}

const StyledLink = styled(Link)`
	text-decoration: none;
	line-height: 1.5;
`

export const PlatformsList: FC = () => {
	const { platforms, isLoading } = useTypedSelector((state) => state.platforms)

	if (isLoading) {
		return (
			<StyledSection>
				<Typography variant="h4">List</Typography>

				<Stack direction="column" gap={stackGap}>
					{Array.from(Array(8)).map((el, i) => (
						<Skeleton width={`${Math.floor(Math.random() * 28)}ch`} key={`platforms-skeleton-${i}`} sx={{ lineHeight: 1.5 }} />
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
							<StyledLink href={platformInfo[platform.name].link}>
								<Typography variant="body1" color="primary.main" sx={{ lineHeight: '1.5' }}>
									{platformInfo[platform.name].title}
								</Typography>
							</StyledLink>
							<Typography variant="body1" sx={{ lineHeight: '1.5' }}>
								<Price value={platform.marketVolume} />
							</Typography>
						</Stack>
					))}
			</Stack>
		</StyledSection>
	)
}
