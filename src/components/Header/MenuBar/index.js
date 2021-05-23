import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';



const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];

const useStyles = makeStyles((theme) => ({
    toolbar: {
    //   borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
    //   flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      backgroundColor:"black"
    },
    toolbarLink: {
      padding: theme.spacing(1),
      color:"white",
      flexShrink: 0,
    },
  }));

function MenuBar() {
    const classes = useStyles();

    return (
        <div >
            <Toolbar className={classes.toolbarSecondary}>
            {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
            ))}
            </Toolbar>
         
        </div>
      );
}

export default MenuBar;