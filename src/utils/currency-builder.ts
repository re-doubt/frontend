export enum SupportedCurrencies {
	TON = 'TON',
	USD = 'USD'
}

export type CurrencySettings = {
	currency: SupportedCurrencies
	multiplier: number
}

export class CurrencyBuilder {
	formattedValue: string
	currency: SupportedCurrencies

	constructor(value: string | number, currency?: SupportedCurrencies) {
		this.formattedValue = value.toString()

		if (currency) {
			this.currency = currency
			return
		}

		this.currency = SupportedCurrencies.TON
	}

	addPrecision(precision: number) {
		const num = parseFloat(this.formattedValue)

		this.formattedValue = num.toPrecision(precision).includes('e') ? num.toFixed(8) : num.toPrecision(precision)

		return this
	}

	addPrecisionIfTruthy(boolish: boolean, precision: number) {
		if (boolish) {
			this.addPrecision(precision)
		}

		return this
	}

	switchCurrency(currency: SupportedCurrencies) {
		this.currency = currency
		return this
	}

	build() {
		switch (this.currency) {
			case SupportedCurrencies.USD:
				return `$${this.formattedValue}`

			default:
				return `${this.formattedValue} 💎`
		}
	}
}
