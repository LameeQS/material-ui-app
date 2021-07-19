import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

  return (
    <div className={classes.root}>
        <AppBar color="secondary">
            <Toolbar>
                <ButtonGroup variant ="filled" size="small" className={classes.title} >
                    <Button 
                        href="/"
                        style={{fontSize: 15}}>
                        Home
                    </Button>
                    <Button 
                        href="/Contact"S 
                        style={{fontSize: 15}}>
                        Contact
                    </Button>
                    <Button 
                        href="/About"S 
                        style={{fontSize: 15}}>
                        About
                    </Button>
                </ButtonGroup>
                <div>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="menu"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                        <MenuItem onClick={() => handleMenuClick('/Contact')}>Contact</MenuItem>
                        <MenuItem onClick={() => handleMenuClick('/About')}>About</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default withRouter(Header);