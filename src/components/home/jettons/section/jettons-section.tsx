import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import { Price } from 'src/components/common/format/price'
import { useTypedSelector } from 'src/store/store'

const StyledSection = styled('section')(
	({ theme }) => `
	background-color: ${theme.palette.secondary.main};
    border-radius: 24px;
	box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.03);
	padding: 16px;
`
)

const Title = styled('h1')`
	font-weight: 600;
	font-size: 24px;
	line-height: 34px;
	margin-bottom: 4px;
`

const Description = styled('p')(
	({ theme }) =>
		`
        font-size: 18px;
        line-height: 1.5;
        color: ${theme.palette.text.disabled}
    `
)

export const JettonsSection = () => {
	const jettonCount = useTypedSelector((state) => state.jettons).jettons.length
	const volume = useTypedSelector((state) => state.volume.totalVolume)

	return (
		<StyledSection>
			<Title>💵 Discover top Jettons</Title>
			<Description>
				Today's TON ecosystem consists of {jettonCount} jettons with total {<Price value={volume} />} trading volume
			</Description>
		</StyledSection>
	)
}
