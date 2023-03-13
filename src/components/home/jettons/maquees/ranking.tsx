import { css, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import Marquee from 'react-fast-marquee'
import { H3 } from 'src/components/common/base/h3'
import { useTypedSelector } from 'src/store/store'

export const StyledMarquee = styled('section')(
	({ theme }) => css`
		border: 2px solid ${theme.palette.secondary.main};
		border-radius: 36px;
		padding: 16px;
		margin: 8px 0 0 0;
		overflow: hidden;
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;
		gap: 16px;
	`
)

export const JettonMarquee: FC = () => {
	const { jettons, isLoading } = useTypedSelector((state) => state.jettons)

	if (isLoading) {
		return (
			<StyledMarquee>
				<H3>Ranking:</H3>
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
			<H3>Ranking:</H3>
			<Marquee>
				<Stack direction="row" gap="16px">
					{jettons.map((jetton, i) => (
						<Typography key={`top-ranking-jetton-${i}`} color="primary">
							#{i} {jetton.name}
						</Typography>
					))}
				</Stack>
			</Marquee>
		</StyledMarquee>
	)
}
