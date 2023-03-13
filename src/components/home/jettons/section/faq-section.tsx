import { Typography } from '@mui/material'
import { StyledSection } from 'src/components/common/base/section'
import { SubTitle } from 'src/components/common/base/subtitle'

export const FAQSection = () => {
	return (
		<>
			<StyledSection>
				<SubTitle>What is Cryptocurrency trading volume?</SubTitle>
				<Typography>
					The trading volume can be calculated by multiplying the number of units traded in a particular time period by the price per unit. This data
					is widely used by traders, analysts, and researchers to monitor market trends, predict price movements, and identify trading opportunities.
					High trading volumes indicate higher demand and interest in a particular cryptocurrency, while low trading volumes indicate lower demand or
					lack of interest.
				</Typography>
			</StyledSection>

			<StyledSection>
				<SubTitle>How do we calculate Jetton prices?</SubTitle>
				<Typography>
					re:doubt is a data platform that tracks all the cryptocurrency trades on the TON Blockchain. We are analysing The Open Network transactions
					and using several methods and formulas to calculate and provide trading data. You can learn more on how we deal with data in the
					documentation section.
				</Typography>
			</StyledSection>

			<StyledSection>
				<SubTitle>Is the information on the website offered as financial advise?</SubTitle>
				<Typography>
					Risk Warning: The information provided on this website is not intended to be and should not be construed as financial advice. We do not
					guarantee the accuracy or completeness of the information provided and strongly recommend that you seek independent financial advice before
					making any investment decision. Investing involves a high degree of risk and you should carefully consider your financial situation before
					making any investment. Past performance is not indicative of future results.
				</Typography>
			</StyledSection>
		</>
	)
}
