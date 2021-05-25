import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "24%",
      margin: 2
    },  
  }));

function ProductList() {
  // const items = false;
  const classes = useStyles();

  if (!items) return Array.from(new Array(10)).map(index=>(
    <div className={classes.root}>
    <Box key={index} width="100%" p={0.5} >
    <Skeleton animation="wave" variant="rect" width="97%" height={300} />
    <Skeleton animation="wave" width="80%" />
    <Skeleton animation="wave" width="60%"/>
    <Skeleton animation="wave" width="80%"/>
    <Skeleton animation="wave" width = "97%"/>
    </Box>
    </div>
  ));

  
    return items.map((item)=>(
      <div className={classes.root} key={item.id} >      
         <Box 
         width="100%"
         p={0.5} >
           <img src={item.image} alt="item" height= '300' width= '100%' object-fit= 'contain'/>
           <Typography>{item.name}</Typography>
           <Typography>{item.desc}</Typography>
           <Typography>{item.price} SAR</Typography>
         </Box>
      </div>
      
    ));
  }

  const items= [
    { 
      id:1,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    }
    ,{
      id:2,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:3,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:8,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:4,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:5,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:6,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
    {
      id:7,
      name: "handbag", 
      desc:"brown leather large",
      price:"90",
      image: "camera.png",
    },
  ];


  export default ProductList;