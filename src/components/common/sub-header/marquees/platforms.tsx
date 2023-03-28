import { FC } from 'react'
import { Marquee } from 'src/components/common/base/marquee'
import { platformInfo } from 'src/constants/platforms'
import { useTypedSelector } from 'src/store/store'

export const PlatformsMarquee: FC = () => {
	const { platforms, isLoading } = useTypedSelector((state) => state.platforms)

	return (
		<Marquee
			items={isLoading ? Array.from(Array(20)) : platforms.map((el) => platformInfo?.[el.name].title || el.name)}
			isLoading={isLoading}
			name="Platforms"
		/>
	)
}
