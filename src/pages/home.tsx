import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { apiClient } from 'src/api/client'
import { ApiResponse, IJetton, IPlatform } from 'src/api/types'
import { JettonsSection } from 'src/components/home/jettons/section/jettons-section'
import JettonsTable from 'src/components/home/jettons/table/table'
import { BaseLayout } from 'src/layouts/base'

export const Home: FC = ({ ...rest }) => {
	const [jettons, setJettons] = useState<IJetton[]>([])
	const [platforms, setPlatforms] = useState<IPlatform[]>([])
	const [trendingJettons, setTrendingJettons] = useState<IJetton[]>([])
	const [totalVolume, setTotalVolume] = useState<number | null>(null)

	const { data, isError, isFetched } = useQuery('top-jettons', async () => {
		return apiClient.get<ApiResponse>('v1/jettons/top')
	})

	useEffect(() => {
		if (isFetched) {
			if (data?.data?.jettons) {
				setJettons(data.data.jettons)
				setPlatforms(data.data.platforms.sort((p1, p2) => p2.marketVolume - p1.marketVolume))
				setTrendingJettons(data.data.jettons.slice(0, 7))
			}

			if (data?.data.total) {
				setTotalVolume(data.data.total)
			}
		}
	}, [data, isFetched])

	return (
		<BaseLayout {...rest}>
			<JettonsSection />
			<JettonsTable jettons={jettons} />
		</BaseLayout>
	)
}
