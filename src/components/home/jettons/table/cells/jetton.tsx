import { styled } from '@mui/material'
import type { FC } from 'react'
import { API_ROOT } from 'src/constants/api'

interface IJetton {
	address: string
	symbol: string
}

const StyledJetton = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const Logo = styled('img')`
	width: 36px;
	height: 36px;
	margin-right: 12px;
`

export const Jetton: FC<IJetton> = ({ address, symbol }) => {
	return (
		<StyledJetton>
			<Logo src={`${API_ROOT}v1/jettons/image/${address}`} />
			<p>{symbol}</p>
		</StyledJetton>
	)
}
