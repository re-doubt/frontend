import { createAsyncThunk, createDraftSafeSelector, createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IJetton } from 'src/api/types'
import { RootState } from './store'

export const JETTONS_FEATURE_KEY = 'jettons'

export type jettonsState = {
	jettons: IJetton[]
}

export const initialjettonsState: jettonsState = {
	jettons: []
}

export const jettonsSlice = createSlice({
	name: JETTONS_FEATURE_KEY,
	initialState: initialjettonsState,
	reducers: {
		setJettons(state, action: PayloadAction<IJetton[]>) {
			state.jettons = action.payload
		}
	}
})

export const jettonsReducer = jettonsSlice.reducer
export const jettonsActions = jettonsSlice.actions

export const getjettonsState = (rootState: RootState): jettonsState => rootState[JETTONS_FEATURE_KEY]
