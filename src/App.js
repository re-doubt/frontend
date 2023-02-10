import logo from './logo.png';
import './App.css';
import TopJettons from "./TopJettons";
import {Box, Container, Grid, Link, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

if (TRACKING_ID !== undefined) {
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{maxHeight:200}}/>
        <Typography variant="h4">
          Real-time security & operational monitoring
        </Typography>
        <TopJettons/>
        <Typography variant="h3">
          More TON Jetton insights coming soon...
        </Typography>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{m: 7}}>
                <GitHubIcon className="service_icon" color="primary"/>
              </Box>
              <Link href="https://github.com/re-doubt" variant="h4">@re-doubt</Link>
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}>
              <Box sx={{m: 7}}>
                <TelegramIcon className="service_icon" color="primary"/>
              </Box>
              <Link href="https://t.me/re_doubt" variant="h4">@re_doubt</Link>
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
