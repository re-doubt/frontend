import { css, styled, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'
import { useTypedSelector } from 'src/store/store'
import { CurrencyBuilder, SupportedCurrencies } from 'src/utils/currency-builder'
import { bodyFontSize } from '../css/responsive'
import { Change } from './change'

interface IPrice {
	percentage?: number
	value: string | number | null
	isFloat?: boolean
}

const Text = styled('div')(
	({ theme }) => css`
		color: ${theme.palette.text.disabled};
		line-height: 32px;
		display: inline-block;

		@media (min-width: ${theme.breakpoints.values.xs}px) {
			font-size: ${bodyFontSize.xs};
		}

		@media (min-width: ${theme.breakpoints.values.sm}px) {
			font-size: ${bodyFontSize.sm};
		}

		@media (min-width: ${theme.breakpoints.values.md}px) {
			font-size: ${bodyFontSize.md};
		}

		@media (min-width: ${theme.breakpoints.values.lg}px) {
			font-size: ${bodyFontSize.lg};
		}
	`
)

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

	return <>{percentage !== undefined ? <Change percentage={percentage} value={formattedValue} /> : <Text>{formattedValue}</Text>}</>
}
