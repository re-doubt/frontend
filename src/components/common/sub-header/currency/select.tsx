import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { SupportedCurrencies } from 'src/utils/currency-builder'
import { styled } from '@mui/material'

const StyledSelect = styled(Select)`
	border-radius: 24px;
	box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.03);
`

export function CurrecySelect() {
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<StyledSelect displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={SupportedCurrencies.TON} id="currency-select">
					<ListSubheader>Crypto</ListSubheader>
					<MenuItem value={SupportedCurrencies.TON}>💎 TON</MenuItem>
					<ListSubheader>Fiat</ListSubheader>
					<MenuItem value={SupportedCurrencies.USD}>💲 USD</MenuItem>
				</StyledSelect>
			</FormControl>
		</div>
	)
}
