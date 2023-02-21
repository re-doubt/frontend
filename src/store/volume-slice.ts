import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export const VOLUME_FEATURE_KEY = 'volume'

export type volumeState = {
	totalVolume: number
}

export const initialvolumeState: volumeState = {
	totalVolume: 0
}

export const volumeSlice = createSlice({
	name: VOLUME_FEATURE_KEY,
	initialState: initialvolumeState,
	reducers: {
		setVolume(state, action: PayloadAction<number>) {
			state.totalVolume = action.payload
		}
	}
})

export const volumeReducer = volumeSlice.reducer
export const volumeActions = volumeSlice.actions

export const getvolumeState = (rootState: RootState): volumeState => rootState[VOLUME_FEATURE_KEY]
