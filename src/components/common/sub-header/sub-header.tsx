import { styled } from '@mui/material'
import { FC } from 'react'
import { useTypedSelector } from 'src/store/store'
import { Price } from '../format/price'
import { CurrecySelect } from './currency/select'

interface ISubHeader {}

const StyledSub = styled('section')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 16px 0 0 0;
`

const Params = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const Param = styled('div')(
	({ theme }) => `
	color: ${theme.palette.text.disabled};
	margin-right: 36px;
	font-size: 18px;
	line-height: 32px;
	:last-child {
		margin-left: 0;
	}
`
)

const Span = styled('span')(
	({ theme }) => `
	color: ${theme.palette.primary.main};
`
)

const Currency = styled('div')`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const CurrencyLabel = styled('label')`
	margin-right: 16px;
`

export const SubHeader: FC<ISubHeader> = () => {
	const { platforms, volume, jettons } = useTypedSelector((state) => state)
	const jettonCount = jettons.jettons.length
	const platformCount = platforms.platforms.length
	const volumeCount = volume.totalVolume

	return (
		<StyledSub>
			<Params>
				<Param>
					Jettons: <Span>{jettonCount}</Span>
				</Param>

				<Param>
					Platforms: <Span>{platformCount}</Span>
				</Param>

				<Param>
					Total volume: <Price value={volumeCount} />
				</Param>
			</Params>

			<Currency>
				<CurrencyLabel>Currency:</CurrencyLabel>
				<CurrecySelect />
			</Currency>
		</StyledSub>
	)
}
