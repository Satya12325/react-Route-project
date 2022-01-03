import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Link } from "react-router-dom";




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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
          <div style={{ display: "flex",gap: "1em" }}>
          <Link to="/home">Home</Link>

{/*          
          <Link to="/about-us">About</Link>
          <Link to="/Contact">Contact</Link>
         <Link to="/Users">Users</Link>
          <Link to="/Service">Service</Link> */}

          </div>
          </Typography>
          <IconButton color="inherit"  aria-label="add to shopping cart">
        < AddShoppingCartIcon />
      </IconButton>
        </Toolbar>
      </AppBar>      
    </div>
  );
}
