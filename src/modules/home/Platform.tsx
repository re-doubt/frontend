import { FC } from 'react'
import { Container, Link, Typography } from '@mui/material'

type PlatformInfo = {
	title: string
	link: string
}

const PLATFORM_INFO: Record<string, PlatformInfo> = {
	megaton: { title: 'Megaton', link: 'https://megaton.fi/' },
	dedust: { title: 'DeDust', link: 'https://dedust.io/dex/swap' },
	'ston.fi': { title: 'Ston.fi', link: 'https://ston.fi/' },
	tonswap: { title: 'Tonswap', link: 'https://tonswap.org/swap/tokens' },
	tegro: { title: 'Tegro', link: 'https://tegro.finance/' },
	tonrocket: { title: 'TON\u00a0Rocket', link: 'https://t.me/tonRocketBot' },
	// mexc: { title: 'MEXC\u00a0(FNZ/USDT)', link: 'https://www.mexc.com/exchange/FNZ_USDT' },
	gateio: { title: 'Gate.io\u00a0(FNZ/USDT)', link: 'https://www.gate.io/trade/FNZ_USDT' }
}

export const Platform = (props: any) => {
	const { name, marketVolume } = props

	if (name === 'mexc') {
		return (
			<Typography sx={{ display: 'inline', pr: 4 }}>
				<Link variant="h6" target="_blank" href="https://mexc.com">
					MEXC
				</Link>
				(&nbsp;
				<Link target="_blank" href="https://www.mexc.com/exchange/FNZ_USDT">
					FNZ/USDT
				</Link>
				,&nbsp;
				<Link target="_blank" href="https://www.mexc.com/exchange/MEGA_USDT">
					MEGA/USDT
				</Link>
				) :&nbsp;
				{marketVolume}
			</Typography>
		)
	}
	const info = PLATFORM_INFO[name]

	if (info === undefined) {
		return null
	}
	return (
		<Typography sx={{ display: 'inline', pr: 4 }}>
			<Link variant="h6" target="_blank" href={info?.link}>
				{info?.title}
			</Link>
			:&nbsp;{marketVolume}
		</Typography>
	)
}
