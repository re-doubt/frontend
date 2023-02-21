import { FC, ReactNode } from 'react'
import { useTypedSelector } from 'src/store/store'
import { CurrencyBuilder, SupportedCurrencies } from 'src/utils/currency-builder'
import { Change } from './change'

interface IPrice {
	percentage?: number
	value: string | number | null
	isFloat?: boolean
}

export const Price: FC<IPrice> = ({ value, percentage, isFloat = false }) => {
	if (value === null) {
		return <>New 🔥</>
	}

	const numIfString = (val: number | string) => {
		if (typeof val === 'string') {
			return parseFloat(val)
		}

		return val
	}

	const { currency, currencyMultiplier } = useTypedSelector((state) => state.settings)
	const builder = new CurrencyBuilder(numIfString(value!) * currencyMultiplier)
	const formattedFloat = isFloat || currency !== SupportedCurrencies.TON
	const formattedValue = builder.addPrecisionIfTruthy(formattedFloat, 2).switchCurrency(currency).build()

	return <>{percentage !== undefined ? <Change percentage={percentage} value={formattedValue} /> : <>{formattedValue}</>}</>
}
