import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { api } from '../api/rtk'
import { jettonsReducer, JETTONS_FEATURE_KEY } from './jettons-slice'
import { platformsReducer, PLATFORMS_FEATURE_KEY } from './platforms-slice'
import { settingsReducer, SETTINGS_FEATURE_KEY } from './settings-slice'
import { volumeReducer, VOLUME_FEATURE_KEY } from './volume-slice'

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			[SETTINGS_FEATURE_KEY]: settingsReducer,
			[JETTONS_FEATURE_KEY]: jettonsReducer,
			[PLATFORMS_FEATURE_KEY]: platformsReducer,
			[VOLUME_FEATURE_KEY]: volumeReducer
		},
		// Additional middleware can be passed to this array
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
		devTools: process.env.NODE_ENV !== 'production',
		// Optional Redux store enhancers
		enhancers: []
	})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
