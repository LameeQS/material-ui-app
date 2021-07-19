import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './Header';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Route, Switch } from "react-router-dom";

import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';
import 'fontsource-roboto';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #34a0a4, #b5e48c)',
    border:0,
    marginBottom: 15,
    borderRadius: 15,
    color:'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 5,
    }
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: cyan[500],
    }
  }
})

export default function App() {
  const classes = useStyles();
  return ( 
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <Header />
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
          </Switch>
          <footer>
            <Box>
              <Container maxWidth="lg">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                      <Button
                        startIcon={<FacebookIcon />}
                        href="https://www.facebook.com"
                        style={{fontSize: 15}}>
                        Facebook
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                      <Button 
                        startIcon={<InstagramIcon />}
                        href="https://www.instagram.com"
                        style={{fontSize: 15}}>
                        Instagram
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                      <Button 
                        startIcon={<TwitterIcon />}
                        href="https://www.facebook.com"
                        style={{fontSize: 15}}>
                        Twitter
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </footer>
        </div>
      </Container>
    </ThemeProvider>
  );
}
