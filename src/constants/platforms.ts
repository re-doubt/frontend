type PlatformInfo = {
	title: string
	link: string
}

export const platformInfo: Record<string, PlatformInfo> = {
	megaton: { title: 'Megaton', link: 'https://megaton.fi/' },
	dedust: { title: 'DeDust', link: 'https://dedust.io/dex/swap' },
	'ston.fi': { title: 'Ston.fi', link: 'https://ston.fi/' },
	tonswap: { title: 'Tonswap', link: 'https://tonswap.org/swap/tokens' },
	tegro: { title: 'Tegro', link: 'https://tegro.finance/' },
	tonrocket: { title: 'TON\u00a0Rocket', link: 'https://t.me/tonRocketBot' },
	mexc: { title: 'MEXC', link: 'https://www.mexc.com/exchange/FNZ_USDT' },
	gateio: { title: 'Gate.io', link: 'https://www.gate.io/trade/FNZ_USDT' },
	tonflex: { title: 'Flex', link: 'https://tonflex.fi/' }
}
