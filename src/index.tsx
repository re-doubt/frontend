import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import ReactGA from 'react-ga'

import { TRACKING_ID } from './constants/analytics'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

if (TRACKING_ID !== undefined) {
	ReactGA.initialize(TRACKING_ID)
	ReactGA.pageview(window.location.pathname + window.location.search)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
])

const queryClient = new QueryClient()

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
