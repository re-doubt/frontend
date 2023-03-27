import { Typography } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'

export const FAQSection = () => {
	return (
		<>
			<StyledSection>
				<Typography variant="h3">Is the information on the website offered as financial advice?</Typography>
				<Typography variant="body2">
					Risk Warning: The information provided on this website is not intended to be and should not be construed as financial advice. We do not
					guarantee the accuracy or completeness of the information provided and strongly recommend that you seek independent financial advice before
					making any investment decision. Investing involves a high degree of risk and you should carefully consider your financial situation before
					making any investment. Past performance is not indicative of future results.
				</Typography>
			</StyledSection>
		</>
	)
}
