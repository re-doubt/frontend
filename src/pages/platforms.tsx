import { FC } from 'react'
import { BaseLayout } from 'src/layouts/base'
import { PlatformsSection } from 'src/components/home/platforms/section/platforms-section'
import { PlatformsGrid } from 'src/components/home/platforms/platforms-grid'

export const Platforms: FC = ({ ...rest }) => {
	return (
		<BaseLayout {...rest}>
			<PlatformsSection />
			<PlatformsGrid />
		</BaseLayout>
	)
}
