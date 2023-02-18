import { FC } from 'react'
import TopJettons from 'src/components/home/TopJettons'
import { BaseLayout } from 'src/layouts/base'

export const Home: FC = ({ ...rest }) => {
	return (
		<BaseLayout {...rest}>
			<TopJettons />
		</BaseLayout>
	)
}
