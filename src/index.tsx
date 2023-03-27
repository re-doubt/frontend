import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import ReactGA from 'react-ga4'

import { TRACKING_ID } from './constants/analytics'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './pages/home'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Platforms } from './pages/platforms'
import { bodyFontSize, bodyFontSize2, h1FontSize, h2FontSize, h3FontSize } from './components/common/css/responsive'

if (TRACKING_ID !== undefined) {
	ReactGA.initialize(TRACKING_ID)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/platforms',
		element: <Platforms />
	},
	{
		path: '/jettons',
		element: <Navigate to="/" />
	}
])

const queryClient = new QueryClient()

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#0088CC'
		},
		secondary: {
			main: '#E7EFF7'
		},
		error: {
			main: '#EC5540'
		},
		success: {
			main: '#40EC51'
		},
		text: {
			disabled: '#41414a',
			primary: '#232328',
			secondary: '#000000'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	}
})

const { breakpoints } = defaultTheme

const theme = createTheme({
	...defaultTheme,
	typography: {
		fontFamily: 'Inter, sans-serif',
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 600,
		h1: {
			fontSize: h1FontSize.lg,
			fontWeight: 600,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: h1FontSize.md
			},
			[breakpoints.down('md')]: {
				fontSize: h1FontSize.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: h1FontSize.xs
			}
		},
		h2: {
			fontSize: h2FontSize.lg,
			fontWeight: 600,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: h2FontSize.md
			},
			[breakpoints.down('md')]: {
				fontSize: h2FontSize.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: h2FontSize.xs
			}
		},
		h3: {
			fontSize: h3FontSize.lg,
			fontWeight: 700,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: h3FontSize.md
			},
			[breakpoints.down('md')]: {
				fontSize: h3FontSize.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: h3FontSize.xs
			}
		},
		h4: {
			fontSize: h3FontSize.lg,
			fontWeight: 700,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: h3FontSize.md
			},
			[breakpoints.down('md')]: {
				fontSize: h3FontSize.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: h3FontSize.xs
			}
		},
		body1: {
			fontSize: bodyFontSize.lg,
			fontWeight: 400,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: bodyFontSize.md
			},
			[breakpoints.down('md')]: {
				fontSize: bodyFontSize.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: bodyFontSize.xs
			}
		},
		body2: {
			fontSize: bodyFontSize2.lg,
			fontWeight: 400,
			lineHeight: 1.5,
			[breakpoints.down('lg')]: {
				fontSize: bodyFontSize2.md
			},
			[breakpoints.down('md')]: {
				fontSize: bodyFontSize2.sm
			},
			[breakpoints.down('sm')]: {
				fontSize: bodyFontSize2.xs
			}
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 360,
			md: 768,
			lg: 1024,
			xl: 1280
		}
	}
})

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
