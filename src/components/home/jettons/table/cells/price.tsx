import { FC, ReactNode } from 'react'
import { CurrencyBuilder, SupportedCurrencies } from 'src/utils/currency-builder'
import { Change } from './change'

interface IPrice {
	percentage?: number
	value: string | number
	isFloat?: boolean
	currency?: SupportedCurrencies
}

export const Price: FC<IPrice> = ({ value, percentage, isFloat = false, currency = SupportedCurrencies.TON }) => {
	const builder = new CurrencyBuilder(value)
	const formattedValue = builder.addPrecisionIfTruthy(isFloat, 2).switchCurrency(currency).build()

	return <>{percentage ? <Change percentage={percentage} value={formattedValue} /> : <p>{formattedValue}</p>}</>
}
