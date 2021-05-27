import React from 'react';
import clsx from 'clsx';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
      direction:"rtl"
    },
    cartButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
       flexShrink: 0,
    },
    drawerPaper: {
       width: drawerWidth,
    },
    drawerHeader:{
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      justifyContent: 'flex-end',
    }
}));


function CartDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true)
    }
    const handleDrawerClose = () =>{
      setOpen(false)
    }
    return (
      <div className={classes.root}>
        <IconButton 
          edge="start" 
          aria-label="open drawer"
          onClick={handleDrawerOpen} 
          className={clsx(classes.cartButton, open && classes.hide)} 
          color="inherit"  
          aria-label="shoppingBasket"
          >
          <ShoppingBasket/>
        </IconButton>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <div className={classes.drawerHeader}>
          <Typography>CART</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
          drawer opened
        </Drawer>
      </div>
    );
  }

  export default CartDrawer;