import {
  Box, Button, CircularProgress,
  Container, FormControl, Grid, InputLabel, Menu, MenuItem,
  Paper, Select,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import NewIcon from '@mui/icons-material/FiberNew';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


const API_ROOT = process.env.REACT_APP_API_ROOT ?? "https://api.redoubt.online/";

function ValueWithTrend(props) {
  const {value, percent} = props.data;
  return (
    <Grid container wrap="nowrap">
      <Grid item xs="auto">
        <Typography variant="h6">{props.formatter ? props.formatter(value, props.precission) : value}</Typography>
      </Grid>
      <Grid item xs={1}/>
      <Grid item xs="auto">
        {percent === null ? (
          <NewIcon color="primary" className="value_new"/>
        ) : percent ===0 ? null : (<Typography variant="h6" className={`value_${percent > 0 ? 'growth' : 'decrease'}`}>
          {percent} %
        </Typography>)}
      </Grid>
    </Grid>
  )
}


function Jetton(props) {
  const { jetton, currencyFormatter } = props;
  return (
    <TableRow>
      <TableCell className="jettons_cell">
        <Grid container wrap="nowrap">
          <Grid item xs="auto">
            <img src={`${API_ROOT}v1/jettons/image/${jetton.address}`}
                 className="jetton_icon" alt={jetton.name} id={`image_${jetton.address}`}/>
          </Grid>
          <Grid item xs={8}><Typography variant="h6">{jetton.name}</Typography></Grid>
          <Grid item xs={2}></Grid>
        </Grid>

      </TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend precission={4} formatter={currencyFormatter} data={jetton.price}/></TableCell>
      <TableCell className="jettons_cell"><ValueWithTrend precission={0} formatter={currencyFormatter} data={jetton.marketVolume}/></TableCell>
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
  const [totalVolume, setTotalVolume] = useState(undefined);
  const [currency, setCurrency] = useState('TON');
  const [currencyRates, setCurrencyRates] = useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
  const defaultTimeout = 5000;
  let timeout = defaultTimeout;

  function loadJettons() {
    fetch(API_ROOT + 'v1/jettons/top', { method: 'GET' })
      .then(response => {
        if (!response.ok) {
          throw new Error("Unable to get jetton data");
        }
        return response.json();
      })
      .catch(error => {
        console.warn(error);
        timeout += 1000;
        setTimeout(loadJettons, timeout);
      })
      .then(res => {
        if (res) {
          setJettons(res['jettons']);
          setTotalVolume(res['total']);
        }
      });
  }

  useEffect(loadJettons, [])

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd', { method: 'GET' })
      .then(response => response.json())
      .then(res => {
        setCurrencyRates(res['the-open-network']);
      })
      .catch(error => console.warn(error));
  }, [])

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function changeCurrency(event) {
    setCurrency(event.currentTarget.dataset.currency);
    handleClose();
  }

  const currencySymbols = {'usd': '$', 'TON': '💎'};

  function currencyFormatter(value, precision) {
    if (currency in (currencyRates ?? {})) {
      value = value * currencyRates[currency];
    }
    if (precision > 0) {
      value = value.toPrecision(precision);
    } else {
      value = Math.round(value)
    }
    return value + '\u00a0' + currencySymbols[currency];
  }

  return (
    <Container sx={{pt: 5, pb:6}}>
      {
        jettons !== undefined && jettons.length > 0 ? (<Container>
              <Typography variant="h5">Total market volume for all jettons in <b>24h</b> is {currencyFormatter(totalVolume, 0)}
                <Button
                  variant="outlined"
                  sx={{ml: 2}}
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  endIcon={<CurrencyExchangeIcon />}
                  onClick={handleClick}
                >{currency}</Button>
              </Typography>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem data-currency="TON" onClick={changeCurrency}>TON</MenuItem>
                {Object.keys(currencyRates ?? {}).map((c, key) =>
                  (<MenuItem key={`currencies-menu-${key}`} data-currency={c} onClick={changeCurrency}>{c.toUpperCase()}</MenuItem>))}
              </Menu>

              <TableContainer>
              <Table sx={{ minWidth: 650, color: 'text.primary', borderCollapse: 'separate', borderSpacing: '0px 10px' }} size="small" aria-label="a dense table" className="jettons_table">
                <TableHead>
                  <TableRow>
                    <TableCell className="jettons_cell">Jetton</TableCell>
                    <TableCell className="jettons_cell">Price ({currency.toUpperCase()} / jetton)</TableCell>
                    <TableCell className="jettons_cell">Volume 24h ({currency.toUpperCase()})</TableCell>
                    <TableCell className="jettons_cell">Active owners 24h</TableCell>
                    <TableCell className="jettons_cell">Total holders</TableCell>
                    <TableCell className="jettons_cell">Created</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jettons.map((jetton, idx) => (<Jetton
                    key={`jettons-${idx}`}
                    jetton={jetton}
                    currencyFormatter={currencyFormatter}
                  />))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          ) :  <Box>
          <Typography variant="h3">Analyzing Blockchain transactions...</Typography>
          <CircularProgress color="primary"/>
        </Box>}
    </Container>
  )
}

export default TopJettons;