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
import { MuiThemeProvider } from 'material-ui/styles';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
  },
  toolbar: {
    alignItems: 'flex-start',
    color: 'blue',
  },
  toolbarIconLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBarTop: {
    paddingTop: 15,
    zIndex: theme.zIndex.drawer + 3,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarBottom: {
    zIndex: theme.zIndex.drawer + 2,
    paddingTop: 45,
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
    top: theme.spacing(13.5),
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    elevation: 10,
    height: 800,
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
    paddingLeft: 40,
    paddingRight: 40,
  },
  fixedHeight: {
    height: "100%",
  },
  // height for the miscellaneous component and Eng and Dev
  fixedHeight1: {
    height: 400,
    paddingTop: 50
  },
  containerHeight: {
    height: 140,
  },

}));

export default function Dashboard() {
  const [iconLeft, setIconLeft] = React.useState(true);
  const classes = useStyles();
  const [openLeft, setOpenLeft] = React.useState(true);
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
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
  const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight)
  const containerHeightPaper = clsx(classes.paper, classes.containerHeight);

  
  return (
    <div className={classes.root}>
    <AppBar className={classes.appBarTop} style={{ background: 'white' }}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h1" variant="h3" color="primary" noWrap className={classes.title} position='fixed'>
          <img src={process.env.PUBLIC_URL + '/ge_primary_blue_logo.svg'} alt="GE ICON" />
            {" "}MyID
          {/* <MuiThemeProvider>
            <SearchBar
              onRequestSearch={() => console.log('onRequestSearch')}
              style={{
                fontWeight:"fontWeightRegular", m:0, paddingBottom:0, paddingTop:0,
                margin: '0 auto',
                maxWidth: 800
              }}
            />
          </MuiThemeProvider> */}
        </Typography>
        <IconButton >
          <AccountCircle fontSize='large' color='primary'/>
        </IconButton>
      </Toolbar>
    </AppBar>
    <AppBar className={classes.appBarBottom} style={{ background: 'linear-gradient(#3970a0, #00396e)' }}>
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
    <div className={clsx(containerHeightPaper)}/>
      <div className={fixedHeightPaper2}>
        <Route />
      </div>
    </div>
);}