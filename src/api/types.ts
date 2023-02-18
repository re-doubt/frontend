export type ValueWithPercentage = {
	value: number
	percent: number
}

export type JettonInterface = {
	name: string
	address: string
	price: ValueWithPercentage
	marketVolume: ValueWithPercentage
	totalHolders: ValueWithPercentage
	activeOwners24h: ValueWithPercentage
}

export type PlatformInterface = {
	name: string
	marketVolume: number
}

// TODO: map this to routes properly
export type ApiResponse = {
	jettons: JettonInterface[]
	platforms: PlatformInterface[]
	total: number
}
