import { createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencySettings, SupportedCurrencies } from 'src/utils/currency-builder'
import { RootState } from './store'

export const SETTINGS_FEATURE_KEY = 'settings'

export type SettingsState = {
	currency: SupportedCurrencies
	currencyMultiplier: number
}

export const initialSettingsState: SettingsState = {
	currency: SupportedCurrencies.TON,
	// base currency is ton, so every other is a mulitplier for asset price in TON
	currencyMultiplier: 1
}

export const settingsSlice = createSlice({
	name: SETTINGS_FEATURE_KEY,
	initialState: initialSettingsState,
	reducers: {
		setCurrency(state, action: PayloadAction<CurrencySettings>) {
			state.currency = action.payload.currency
			state.currencyMultiplier = action.payload.multiplier
		},
		resetCurrency(state) {
			state.currency = SupportedCurrencies.TON
			state.currencyMultiplier = 1
		}
	}
})

export const settingsReducer = settingsSlice.reducer
export const settingsActions = settingsSlice.actions

export const getSettingsState = (rootState: RootState): SettingsState => rootState[SETTINGS_FEATURE_KEY]
