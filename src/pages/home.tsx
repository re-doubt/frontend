import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { apiClient } from 'src/api/client'
import { ApiResponse, JettonInterface, PlatformInterface } from 'src/api/types'
import JettonsTable from 'src/components/home/jettons/table/table'
import { BaseLayout } from 'src/layouts/base'

export const Home: FC = ({ ...rest }) => {
	const [jettons, setJettons] = useState<JettonInterface[]>([])
	const [platforms, setPlatforms] = useState<PlatformInterface[]>([])
	const [totalVolume, setTotalVolume] = useState<number | undefined>(undefined)
	const [currencyRates, setCurrencyRates] = useState(undefined)
	const [currency, setCurrency] = useState<string>('TON')
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const defaultTimeout = 5000
	let timeout = defaultTimeout

	const { data, isError, isFetched } = useQuery('top-jettons', async () => {
		return apiClient.get<ApiResponse>('v1/jettons/top')
	})

	useEffect(() => {
		if (isFetched) {
			if (data?.data?.jettons) {
				setJettons(data.data.jettons)
				setPlatforms(data.data.platforms.sort((p1, p2) => p2.marketVolume - p1.marketVolume))
			}

			if (data?.data.total) {
				setTotalVolume(data.data.total)
			}
		}
	}, [data, isFetched])

	return (
		<BaseLayout {...rest}>
			<JettonsTable jettons={jettons} />
		</BaseLayout>
	)
}
