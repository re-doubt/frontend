export type ValueWithPercentage = {
	value: number
	percent: number
}

export type IJetton = {
	name: string
	address: string
	price: ValueWithPercentage
	marketVolume: ValueWithPercentage
	totalHolders: ValueWithPercentage
	activeOwners24h: ValueWithPercentage
}

export type IPlatform = {
	name: string
	marketVolume: number
}

// TODO: map this to routes properly
export type ApiResponse = {
	jettons: IJetton[]
	platforms: IPlatform[]
	total: number
	minMarketVolume: number
}
