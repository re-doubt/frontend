import { Link, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import { StyledSection } from 'src/components/common/base/section'
import { SubTitle } from 'src/components/common/base/subtitle'
import { Price } from 'src/components/common/format/price'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'

const H3 = styled('h3')`
	font-weight: 600;
	line-height: 24px;
	font-size: 20px;
`

export const PlatformsList: FC = () => {
	const { platforms, isLoading } = useTypedSelector((state) => state.platforms)

	if (isLoading) {
		return (
			<StyledSection>
				<SubTitle>List</SubTitle>

				<Stack direction="column" gap="16px">
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

			<Stack direction="column" gap="16px">
				{platforms
					.filter((el) => Object.keys(platformInfo).includes(el.name))
					.map((platform, i) => (
						<Stack key={`platform-${i}`} direction="row" gap="10px" alignItems="center">
							<H3>
								<Link href={platformInfo[platform.name].link}>{platformInfo[platform.name].title}</Link>
							</H3>
							<Price value={platform.marketVolume} />
						</Stack>
					))}
			</Stack>
		</StyledSection>
	)
}
