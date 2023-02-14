import { Grid, TableCell, TableRow, Typography } from '@mui/material'
import { API_ROOT } from 'src/constants/api'
import { ValueWithTrend } from './ValueWithTrend'

export const Jetton = (props: any) => {
	const { jetton, currencyFormatter } = props

	return (
		<TableRow>
			<TableCell className="jettons_cell">
				<Grid container wrap="nowrap">
					<Grid item xs="auto">
						<img src={`${API_ROOT}v1/jettons/image/${jetton.address}`} className="jetton_icon" alt={jetton.name} id={`image_${jetton.address}`} />
					</Grid>
					<Grid item xs={8}>
						<Typography variant="h6">{jetton.name}</Typography>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</TableCell>
			<TableCell className="jettons_cell">
				<ValueWithTrend precission={4} formatter={currencyFormatter} data={jetton.price} />
			</TableCell>
			<TableCell className="jettons_cell">
				<ValueWithTrend precission={0} formatter={currencyFormatter} data={jetton.marketVolume} />
			</TableCell>
			<TableCell className="jettons_cell">
				<ValueWithTrend data={jetton.activeOwners24h} />
			</TableCell>
			<TableCell className="jettons_cell">
				<ValueWithTrend data={jetton.totalHolders} />
			</TableCell>
			{/* <TableCell className="jettons_cell"> */}
			{/*  {jetton.sinceCreationSeconds > 86400 * 30 ? ( */}
			{/*    <Typography variant="h6">1+&nbsp;month&nbsp;ago</Typography> */}
			{/*  ) : ( */}
			{/*    <Typography variant="h6"> */}
			{/*      {(jetton.sinceCreationSeconds / 86400).toFixed(0)} */}
			{/*      &nbsp;days&nbsp;ago */}
			{/*    </Typography> */}
			{/*  )} */}
			{/* </TableCell> */}
		</TableRow>
	)
}
