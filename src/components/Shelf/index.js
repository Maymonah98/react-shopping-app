import React from 'react';
import Filters from './Filters'
import ProductList from './ProductList';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },  
  }));

function Shelf() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3} sm = {3}>
              <Filters/>
            </Grid>
            <Grid item xs={9}>
              <ProductList/>
            </Grid>
          </Grid>
        </div>
      );
  }

  export default Shelf;