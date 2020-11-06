import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },  
  }));

function ProductList() {
  const classes = useStyles();
  const items= false;

  if (!items) return Array.from(new Array(6)).map(index=>(
    <div className={classes.root}>
    
    <Box key={index} width="100%" p={0.5} >
    <Skeleton animation="wave" variant="rect" width="100%" height={300} />
    <Skeleton animation="wave" width="80%" />
    <Skeleton animation="wave" width="60%"/>
    <Skeleton animation="wave" width="80%"/>
    <Skeleton animation="wave" />
    </Box>
    
    </div>
  ));
    return (
      <div >   ProductList   </div>
    );
  }

  export default ProductList;