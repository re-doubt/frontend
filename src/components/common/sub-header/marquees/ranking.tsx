import { FC } from 'react'
import { Marquee } from 'src/components/common/base/marquee'
import { useTypedSelector } from 'src/store/store'

export const JettonMarquee: FC = () => {
	const { jettons, isLoading } = useTypedSelector((state) => state.jettons)

	return <Marquee items={isLoading ? Array.from(Array(20)) : jettons.map((el) => el.name)} isLoading={isLoading} name="Jettons" />
}
