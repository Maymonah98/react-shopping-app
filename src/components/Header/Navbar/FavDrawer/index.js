import React from 'react';
import clsx from 'clsx';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        direction:"rtl"
      },
    favButton: {
     marginRight: theme.spacing(2),
    },hide: {
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
      },
})) 

function FavDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true)
      console.log("button is handling")
    }
    const handleDrawerClose = () =>{
      setOpen(false)
    }
    return (
      <div className={classes.root}>
        <IconButton 
        edge="start"  
        className={clsx(classes.favButton, open && classes.hide)} 
        color="inherit"  
        aria-label="open drawer"
        onClick={handleDrawerOpen} >
          <Favorite/>
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
          <Typography>FAFORITE</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
          drawer opened
        </Drawer>
      </div>
    );
  }

  export default FavDrawer;