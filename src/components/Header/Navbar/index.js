import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import history from '../../history';
import FavDrawer from './FavDrawer';
import CartDrawer from './CartDrawer';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
        <Button onClick ={()=> history.push('/login')}>Login</Button>
        <Button onClick={() => history.push('/signup')}>sign up</Button>
          <Typography  
          component="h2"
          variant="h5"
          align="center"
           className={classes.title}>
            Name of website 
          </Typography>
          <FavDrawer/>
          <CartDrawer/>
        </Toolbar>
    </div>
  );
  }

  export default Navbar;