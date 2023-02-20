import { FC, ReactNode } from 'react'
import { CurrencyBuilder, SupportedCurrencies } from 'src/utils/currency-builder'

interface IPrice {
	value: string | number
	isFloat?: boolean
	currency?: SupportedCurrencies
}

export const Price: FC<IPrice> = ({ value, isFloat = false, currency = SupportedCurrencies.TON }) => {
	const builder = new CurrencyBuilder(value)
	const formattedValue = builder.addPrecisionIfTruthy(isFloat, 2).switchCurrency(currency).build()

	return <p>{formattedValue}</p>
}
