import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';



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


function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
        <Toolbar>
        <Button >Login</Button>
        <Button >sign up</Button>
          <Typography  
          component="h2"
          variant="h5"
          align="center"
           className={classes.title}>
            HandMade 
          </Typography>
          {/* <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <IconButton edge="start"  className={classes.menuButton} color="inherit"  aria-label="fovorite">
            <Favorite/>
          </IconButton>
          <IconButton edge="start"  className={classes.menuButton} color="inherit"  aria-label="shoppingBasket">
            <ShoppingBasket/>
          </IconButton>
        </Toolbar>
    </div>
  );
  }

  export default Navbar;