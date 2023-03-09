import { FC } from 'react'
import { JettonsSection } from 'src/components/home/jettons/section/jettons-section'
import { BaseLayout } from 'src/layouts/base'
import { JettonsTable } from 'src/components/home/jettons/table/table'

export const Home: FC = ({ ...rest }) => {
	return (
		<BaseLayout {...rest}>
			<JettonsSection />
			<JettonsTable />
		</BaseLayout>
	)
}
