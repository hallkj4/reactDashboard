import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/HelpOutline'
import SearchBar from 'material-ui-search-bar';
import { secondaryListItems } from './listItems';
import AdminServices from './adminServices';
import UserServices from './userServices';
import EngAndDev from './engAndDev';
import Miscellenous from './miscellaneous';
import { blue } from '@material-ui/core/colors';
import { Icon } from '@material-ui/core';
import Route from './Route';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
  },
  toolbar: {
    alignItems: 'flex-start',
    color: 'blue',
    paddingRight: 10, // keep right padding when drawer closed
    paddingLeft: 20,
  },
  toolbarIconLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbarIconRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(9),
    top: theme.spacing(13),
    width: `calc(100% - ${theme.spacing(9)*2}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarTop: {
    paddingTop: 40,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  // Left App Bar shifting when open/closing drawer
  appBarShiftLeft: {
    marginLeft: drawerWidth + theme.spacing(9),
    width: `calc(100% - ${drawerWidth + theme.spacing(9)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  // Right App Bar shifting when open/closing drawer
  appBarShiftRight: {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth + theme.spacing(9)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  // Left and Right App Bar shifting when open/closing drawer
  appBarShiftBoth: {
    marginLeft: drawerWidth,
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth*2}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 75,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  // Drawer paper for when it is open
  drawerPaper: {
    top: 100,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    elevation: 10,
  },
  // Drawer paper for when it is closed
  drawerPaperClose: {

    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flex: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingLeft: 15,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    width: '100hv',
  },
  // Main landing page with all the columns
  paper: {
    // controls spacing for the right and left side of the paper
    // Controls the spacing for the top of the paper and the top of the screen
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'row',
    borderTop: 'darkblue',
    borderTopStyle: 'solid',
    borderWidth: '7px',
  },
  // main column size
  paper1: {
    paddingLeft: 0,
    paddingRight: 0,
    // Controls the spacing for the top of the paper and the title of each section
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    borderTop: 'darkblue',
    borderTopStyle: 'solid',
    borderWidth: '7px',
    borderRight: 'darkblue'
  },
  fixedHeight: {
    height: 750,
  },
  // height for the miscellaneous component and Eng and Dev
  fixedHeight1: {
    height: 375,
  },
  containerHeight: {
    height: 0,
  },

}));

export default function Dashboard() {
  const [iconRight, setIconRight] = React.useState(true);
  const [iconLeft, setIconLeft] = React.useState(true);
  const classes = useStyles();
  const [openLeft, setOpenLeft] = React.useState(true);
  const [openRight, setOpenRight] = React.useState(true);
  const handleLeftDrawer = () => {
    if(openLeft){
      setOpenLeft(false);
    }
    else{
      setOpenLeft(true);
    }
    if(iconLeft){
      setIconLeft(false);
    } else {
      setIconLeft(true);
    }
  };
  const handleRightDrawer = () => {
    if(openRight){
      setOpenRight(false);
    }
    else{
      setOpenRight(true);
    }
    if(iconRight){
      setIconRight(false);
    } else {
      setIconRight(true);
    }
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
  const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight)
  const containerHeightPaper = clsx(classes.paper, classes.containerHeight);

  
  return (
    <div className={classes.root}>
    {/* <AppBar className={classes.appBarTop} style={{ background: 'white' }}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h3" color="primary" noWrap className={classes.title} position='fixed'>
          MyID
        </Typography>
        <IconButton >
          <AccountCircle fontSize='large' color='primary'/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <AppBar position="absolute" className={clsx(classes.appBar, !openLeft && classes.appBarShiftLeft, !openRight && classes.appBarShiftRight, !openRight && !openLeft && classes.appBarShiftBoth)} style={{ background: 'lightgrey' }}>
      <Toolbar className={classes.toolbar}>
      </Toolbar>
    </AppBar>
    <Drawer 
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, openLeft && classes.drawerPaperClose),
      }}
      openLeft={openLeft}
    >
      <div className={classes.toolbarIconLeft}>
        <IconButton onClick={handleLeftDrawer}>
        { iconLeft ? <MenuIcon fontSize="large"/> : <ChevronLeftIcon fontSize="large"/> }
        </IconButton> 
      </div>
      <Divider />
        <List>{secondaryListItems}</List>
    </Drawer>
    <div>
      <Drawer 
        anchor='right'
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, openRight && classes.drawerPaperClose),
        }}
        openRight={openRight}
      >
        <div className={classes.toolbarIconRight}>
          <IconButton onClick={handleRightDrawer}>
            { iconRight ? <HelpIcon fontSize="large"/> : <ChevronRightIcon fontSize="large"/> }          
          </IconButton>
        </div>
        <Divider />
      </Drawer>
    </div> */}
    <div className={clsx(containerHeightPaper)}/>
    {/* <Grid
      container 
      justify="flex-start"
      alignItems="flex-start"
      alignContent="flex-start"
    >
      <Grid item xs={25} md={10} lg={4} >
        <Paper className={fixedHeightPaper2}>
          <AdminServices />
        </Paper>
      </Grid>
      <Grid item xs={12} md={10} lg={4}>
        <Paper className={fixedHeightPaper2}>
          <UserServices />
        </Paper>
      </Grid>
      <Grid item xs={12} md={10} lg={4}>
        <Paper className={fixedHeightPaper1}>
          <EngAndDev />
        </Paper>
        <Paper className={fixedHeightPaper1}>
          <Miscellenous />
        </Paper>
      </Grid>
    </Grid> */}
        <Route />
    </div>
);}