import { FC } from 'react'
import { BaseLayout } from 'src/layouts/base'
import { SettingsSection } from 'src/components/home/settings/section/SettingsSection'
import { SettingsForm } from 'src/components/home/settings/form/SettingsForm'

export const Settings: FC = ({ ...rest }) => {
	return (
		<BaseLayout {...rest}>
			<SettingsSection />
			<SettingsForm />
		</BaseLayout>
	)
}
