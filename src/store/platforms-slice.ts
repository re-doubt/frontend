import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlatform } from 'src/api/types'
import { Loadable } from 'src/utils/types'
import { RootState } from './store'

export const PLATFORMS_FEATURE_KEY = 'platforms'

export type PlatformsState = {
	platforms: IPlatform[]
}

export const initialPlatformsState: Loadable<PlatformsState> = {
	platforms: [],
	isLoading: true
}

export const platformsSlice = createSlice({
	name: PLATFORMS_FEATURE_KEY,
	initialState: initialPlatformsState,
	reducers: {
		setPlatforms(state, action: PayloadAction<IPlatform[]>) {
			state.platforms = action.payload
		},
		triggerLoading(state) {
			state.isLoading = !state.isLoading
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		}
	}
})

export const platformsReducer = platformsSlice.reducer
export const platformsActions = platformsSlice.actions

export const getplatformsState = (rootState: RootState): PlatformsState => rootState[PLATFORMS_FEATURE_KEY]
