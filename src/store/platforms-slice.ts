import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlatform } from 'src/api/types'
import { RootState } from './store'

export const PLATFORMS_FEATURE_KEY = 'platforms'

export type platformsState = {
	platforms: IPlatform[]
}

export const initialplatformsState: platformsState = {
	platforms: []
}

export const platformsSlice = createSlice({
	name: PLATFORMS_FEATURE_KEY,
	initialState: initialplatformsState,
	reducers: {
		setPlatforms(state, action: PayloadAction<IPlatform[]>) {
			state.platforms = action.payload
		}
	}
})

export const platformsReducer = platformsSlice.reducer
export const platformsActions = platformsSlice.actions

export const getplatformsState = (rootState: RootState): platformsState => rootState[PLATFORMS_FEATURE_KEY]
