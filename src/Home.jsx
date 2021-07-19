import React from 'react';

import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import Button from '@material-ui/core/Button';

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
  
  function ButtonStyled(){
    const classes = useStyles();
    return <Button className={classes.root}>Learn more</Button>
  }

const Home = props => {
    return <div>
        <header className="App-header">
        <Container maxWidth='lg'>
        <Box>
            <Typography variant="h1"> 
                Main page
            </Typography>
            <Typography variant="subtitle1" component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <ButtonStyled />
        </Box>
        <Box border={2} bgcolor="text.disabled">
            <ImageList className="imagelist">
                <img src="/gaming-computer.jpeg"  style={{width:'32%', height:'auto', padding:5}}/>
                <img src="/vrimage.jpg"  style={{width:'32%', height:'auto', padding:5}}/>
                <img src="/Robot-AI.jpg"  style={{width:'32%', height:'auto', padding:5}}/>
            </ImageList>
        </Box>
        </Container>
        </header>

        <body className="App-body">
        <Container maxWidth="lg">
            <header>
            <Typography variant="h1" component="div"> 
                What's new?
            </Typography>
            </header>
            <body>
            <Box borderBottom={3} bgcolor="#19495c">
                <container className="flex-container">
                <div>
                    <img src="/thinking.jpg" style={{width:'300px', height:'auto', padding:5}}/>
                </div>
                <Typography variant="subtitle1" component="div" color="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis elementum, ornare urna quis, dignissim magna. Etiam varius magna elit, in finibus leo facilisis at. Aliquam sit amet eros eu est mollis efficitur. Sed eu fermentum massa, id imperdiet nisi. Pellentesque ac euismod enim. Sed sit amet purus vulputate, viverra purus sed, pulvinar sem. Proin nec rutrum enim. Suspendisse potenti. 
                </Typography>
                </container>
            </Box>
            <Box borderBottom={3} bgcolor="#19495c">
                <container className="flex-container">
                <div>
                    <img src="/strategy.png" style={{width:'300px', height:'auto', padding:5}}/>
                </div>
                <Typography variant="subtitle1" component="div" color="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis elementum, ornare urna quis, dignissim magna. Etiam varius magna elit, in finibus leo facilisis at. Aliquam sit amet eros eu est mollis efficitur. Sed eu fermentum massa, id imperdiet nisi. Pellentesque ac euismod enim. Sed sit amet purus vulputate, viverra purus sed, pulvinar sem. Proin nec rutrum enim. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
                </container>
            </Box>
            <Box bgcolor="#19495c">
                <container className="flex-container">
                <div>
                    <img src="/illustration.jpg" style={{width:'300px', height:'auto', padding:5}}/>
                </div>
                <Typography variant="subtitle1" component="div" color="primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget felis elementum, ornare urna quis, dignissim magna. Etiam varius magna elit, in finibus leo facilisis at. Aliquam sit amet eros eu est mollis efficitur. Sed eu fermentum massa, id imperdiet nisi. Pellentesque ac euismod enim. Sed sit amet purus vulputate, viverra purus sed, pulvinar sem. Proin nec rutrum enim. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
                </container>
            </Box>
            </body>
            <footer>

            </footer>
        </Container>
        </body>
    </div>
};

export default Home;