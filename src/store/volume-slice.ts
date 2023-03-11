import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Loadable } from 'src/utils/types'
import { RootState } from './store'

export const VOLUME_FEATURE_KEY = 'volume'

export type VolumeState = {
	totalVolume: number
}

export const initialVolumeState: Loadable<VolumeState> = {
	totalVolume: 0,
	isLoading: true
}

export const volumeSlice = createSlice({
	name: VOLUME_FEATURE_KEY,
	initialState: initialVolumeState,
	reducers: {
		setVolume(state, action: PayloadAction<number>) {
			state.totalVolume = action.payload
		},
		triggerLoading(state) {
			state.isLoading = !state.isLoading
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		}
	}
})

export const volumeReducer = volumeSlice.reducer
export const volumeActions = volumeSlice.actions

export const getvolumeState = (rootState: RootState): VolumeState => rootState[VOLUME_FEATURE_KEY]
