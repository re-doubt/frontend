import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { SupportedCurrencies } from 'src/utils/currency-builder'

export function CurrecySelect() {
	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<Select displayEmpty inputProps={{ 'aria-label': 'Without label' }} defaultValue={SupportedCurrencies.TON} id="currency-select">
					<ListSubheader>Crypto</ListSubheader>
					<MenuItem value={SupportedCurrencies.TON}>💎 TON</MenuItem>
					<ListSubheader>Fiat</ListSubheader>
					<MenuItem value={SupportedCurrencies.USD}>💲 USD</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
