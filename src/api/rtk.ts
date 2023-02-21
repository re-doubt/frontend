import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROOT } from 'src/constants/api'
import { ApiResponse } from './types'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: `${API_ROOT}v1/` }),
	endpoints: (builder) => ({
		getJettons: builder.query<ApiResponse, string>({
			query: (_) => ({
				url: 'jettons/top'
			})
		})
	})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJettonsQuery } = api
