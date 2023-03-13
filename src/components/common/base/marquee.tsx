import { css, Skeleton, Stack, styled, Typography } from '@mui/material'
import { FC } from 'react'
import ReactMarquee from 'react-fast-marquee'
import { borderRadius } from '../css/responsive'

const StyledMarquee = styled('section')(
	({ theme }) => css`
		border: 2px solid ${theme.palette.secondary.main};
		overflow: hidden;
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			border-radius: ${borderRadius.xs};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			border-radius: ${borderRadius.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			border-radius: ${borderRadius.lg};
		}
	`
)

const Badge = styled('div')(
	({ theme }) => css`
		background-color: ${theme.palette.secondary.main};
		padding: 16px;
	`
)

export interface IMarquee {
	items: string[]
	isLoading: boolean
	name: string
}

export const Marquee: FC<IMarquee> = ({ items, isLoading, name }) => {
	return (
		<StyledMarquee>
			<Badge>
				<Typography fontWeight={600}>{name}:</Typography>
			</Badge>
			<ReactMarquee gradient={false}>
				<Stack direction="row" gap="16px" sx={{ marginLeft: '16px' }}>
					{items.map((item, i) =>
						isLoading ? (
							<Skeleton width="5ch" key={`top-ranking-skeleton-${i}`} sx={{ lineHeight: '32px' }} />
						) : (
							<Typography key={`${name}-marquee-${i}`} color="primary">
								#{i} {item}
							</Typography>
						)
					)}
				</Stack>
			</ReactMarquee>
		</StyledMarquee>
	)
}
