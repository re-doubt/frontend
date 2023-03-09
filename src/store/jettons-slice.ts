import { createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IJetton } from 'src/api/types'
import { Loadable } from 'src/utils/types'
import { RootState } from './store'

export const JETTONS_FEATURE_KEY = 'jettons'

export type JettonsState = {
	jettons: IJetton[]
	isLoading: boolean
}

export const initialJettonsState: Loadable<JettonsState> = {
	jettons: [],
	isLoading: true
}

export const jettonsSlice = createSlice({
	name: JETTONS_FEATURE_KEY,
	initialState: initialJettonsState,
	reducers: {
		setJettons(state, action: PayloadAction<IJetton[]>) {
			state.jettons = action.payload
		},
		triggerLoading(state) {
			state.isLoading = !state.isLoading
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		}
	}
})

export const jettonsReducer = jettonsSlice.reducer
export const jettonsActions = jettonsSlice.actions

export const getjettonsState = (rootState: RootState): JettonsState => rootState[JETTONS_FEATURE_KEY]
