import React from "react";
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Image from './worktable.png';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Contact = () => {
    const classes = useStyles();
    return <div>
        <header className="App-header">
            <Container maxWidth='lg'>
                <Paper elevation={3} style={styles.paperContainer}>
                    <Typography variant="h1" color="primary"> 
                        Contact page
                    </Typography>
                </Paper>
                <Box>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Main office
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                (adress)
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                (phone number)
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </header>
  </div>;
};

export default Contact;