import { css, Skeleton, styled, Typography } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'

const Description = styled(Typography)(
	({ theme }) =>
		css`
			color: ${theme.palette.text.disabled};
		`
)

export const SettingsSection = () => {
	return (
		<StyledSection>
			<Typography variant="h2">⚙️ Settings</Typography>
			<Description>Configure our platform to your liking</Description>
		</StyledSection>
	)
}
