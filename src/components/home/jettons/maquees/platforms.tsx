import { css, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import Marquee from 'react-fast-marquee'
import { H3 } from 'src/components/common/base/h3'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'
import { StyledMarquee } from './ranking'

export const PlatformsMarquee: FC = () => {
	const { platforms, isLoading } = useTypedSelector((state) => state.platforms)

	if (isLoading) {
		return (
			<StyledMarquee>
				<H3>Platforms:</H3>
				<Marquee>
					<Stack direction="row" gap="16px" sx={{ marginLeft: '16px' }}>
						{Array.from(Array(20)).map((_, i) => (
							<Skeleton width="5ch" key={`top-ranking-skeleton-${i}`} sx={{ lineHeight: '32px' }} />
						))}
					</Stack>
				</Marquee>
			</StyledMarquee>
		)
	}

	return (
		<StyledMarquee>
			<H3>Platforms:</H3>
			<Marquee>
				<Stack direction="row" gap="16px">
					{platforms.map((platform, i) => (
						<Typography key={`top-ranking-jetton-${i}`} color="primary">
							#{i} {platformInfo?.[platform.name].title || platform.name}
						</Typography>
					))}
				</Stack>
			</Marquee>
		</StyledMarquee>
	)
}
