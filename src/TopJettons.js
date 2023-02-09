import {
  Box, CircularProgress,
  Container, Grid,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import NewIcon from '@mui/icons-material/FiberNew';

const API_ROOT = process.env.REACT_APP_API_ROOT ?? "https://api.redoubt.online/";

function ValueWithTrend(props) {
  const {value, percent} = props.data;
  return (
    <Grid container wrap="nowrap">
      <Grid xs="auto">
        <Typography variant="h6">{props.formatter ? props.formatter(value) : value}</Typography>
      </Grid>
      <Grid xs={1}/>
      <Grid xs="auto">
        {percent === null ? (
          <NewIcon color="primary" className="value_new"/>
        ) : (<Typography variant="h6" className={`value_${percent > 0 ? 'growth' : 'decrease'}`}>
          {percent} %
        </Typography>)}
      </Grid>
    </Grid>
  )
}

function Jetton(props) {
  const { jetton } = props;
  return (
    <TableRow>
      <TableCell className="jettons_cell">
        <Grid container wrap="nowrap">
          <Grid xs="auto">
            <img src={`${API_ROOT}v1/jettons/image/${jetton.address}`}
                 className="jetton_icon" alt={jetton.name} id={`image_${jetton.address}`}/>
          </Grid>
          <Grid xs={8}><Typography variant="h6">{jetton.name}</Typography></Grid>
          <Grid xs={2}></Grid>
        </Grid>

      </TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend formatter={d => d.toPrecision(4)} data={jetton.price}/></TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend data={jetton.marketVolume}/></TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend data={jetton.activeOwners24h}/></TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend data={jetton.totalHolders}/></TableCell>
      <TableCell className="jettons_cell">
        {jetton.sinceCreationSeconds > 86400 * 30 ?
        <Typography variant="h6">1+&nbsp;month&nbsp;ago</Typography> :
        <Typography variant="h6">{(jetton.sinceCreationSeconds / 86400).toFixed(0)}&nbsp;days&nbsp;ago</Typography>
        }
      </TableCell>
    </TableRow>
  )
}

function TopJettons(props) {
  const [jettons, setJettons] = useState([]);

  useEffect(() => {
    fetch(API_ROOT + 'v1/jettons/top', { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        setJettons(res['jettons']);
      })
      .catch(error => console.warn(error));
  }, [])

  return (
    <Container sx={{pt: 5, pb:6}}>
      {
        jettons !== undefined && jettons.length > 0 ? (<TableContainer>
            <Table sx={{ minWidth: 650, color: 'text.primary', borderCollapse: 'separate', borderSpacing: '0px 10px' }} size="small" aria-label="a dense table" className="jettons_table">
              <TableHead>
                <TableRow>
                  <TableCell className="jettons_cell">Jetton</TableCell>
                  <TableCell className="jettons_cell">Price (TON / jetton)</TableCell>
                  <TableCell className="jettons_cell">Volume 24h (TON)</TableCell>
                  <TableCell className="jettons_cell">Active owners 24h</TableCell>
                  <TableCell className="jettons_cell">Total holders</TableCell>
                  <TableCell className="jettons_cell">Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jettons.map((jetton, idx) => (<Jetton
                  key={idx}
                  jetton={jetton}
                />))}
              </TableBody>
            </Table>
          </TableContainer>
          ) :  <Box>
          <Typography variant="h3">Analyzing Blockchain transactions...</Typography>
          <CircularProgress color="primary"/>
        </Box>}
    </Container>
  )
}

export default TopJettons;