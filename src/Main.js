import React, { Component } from "react"
import AdminServices from './adminServices';
import UserServices from './userServices';
import EngAndDev from './engAndDev';
import Miscellenous from './miscellaneous';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HelpIcon from '@material-ui/icons/Help';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles'

const drawerWidth = 300;

const styles = theme => ({
    // main column size
    paper1: {
        padding: 25,
        top: 500,
        display: 'flex',
        flexDirection:'column',
    },
    fixedHeight: {
        height: 800,
        borderBottom: 'darkblue',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
    },

    // height for the miscellaneous component 
    fixedHeight1: {
        height: 400,
        borderTop: 'darkblue',
        borderTopStyle: 'solid',
        borderTopWidth: '7px',
        borderBottom: 'darkblue',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderRight: 'darkblue',
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
    },
    // and Eng and Dev
    fixedHeight2: {
        height: 400,
        borderRight: 'darkblue',
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
    },    
    // height for the Admin services
    fixedHeight3: {
        height: 800,
        borderLeft: 'darkblue',
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderBottom: 'darkblue',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
    },
    containerHeight: {
        height: 100,
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
    appBarShiftRight: {
        right: drawerWidth-theme.spacing(9),
        left: theme.spacing(9)-theme.spacing(9),
        marginRight: 0,
        width: `calc(100% - ${drawerWidth + theme.spacing(9)}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    appBar: {
        marginLeft: theme.spacing(9),
        marginRight: theme.spacing(9),
        top: theme.spacing(13),  
        marginBottom: theme.spacing(3),
        borderBottom: 'darkblue',
        borderBottomStyle: 'solid',
        borderBottomWidth: '7px',
        width: `calc(100% - ${theme.spacing(9)*2}px)`,
        zIndex: theme.zIndex.drawer -1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        color: "primary",
    },
    toolbar: {
        alignItems: 'flex-start',
        color: 'blue',
    },
    toolbarIconRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: `calc(100% - ${drawerWidth - theme.spacing(9)}px)`,
        marginLeft: 0,
        marginRight: drawerWidth,
    },
    contentShift: {
        width: '100%',
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            openRight: true,
            iconRight: true,
        }
        this.handleRightDrawer = this.handleRightDrawer.bind(this)
    }
    handleRightDrawer (){
        // if(this.openRight){
        //     this.setOpenRight(false);
        // }
        // else{
        //     this.setOpenRight(true);
        // }
        this.setState({
            openRight: !this.state.openRight,
            iconRight: !this.state.iconRight,

        })
        // if(this.iconRight){
        //     this.setIconRight(false);
        // } else {
        //     this.setIconRight(true);
        // }
    };
    render(){
        const {classes} = this.props;
        const fixedHeightPaper = clsx(classes.paper1, classes.fixedHeight2);
        const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
        const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight);
        const fixedHeightPaper3 = clsx(classes.paper1, classes.fixedHeight3);
        return(
            <div>
            <Grid container className = {clsx(classes.content, {
                [classes.contentShift]: this.state.openRight,
            })}>
                <Grid item xs={4}>
                    <Paper className={fixedHeightPaper3} >
                        <AdminServices />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={fixedHeightPaper2}>  
                        <UserServices />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={fixedHeightPaper}>
                        <EngAndDev />
                    </Paper>
                    <Paper className={fixedHeightPaper1}>
                        <Miscellenous />
                    </Paper>
                </Grid>
            </Grid>
            <AppBar position="absolute" className={clsx(classes.appBar)} style={{ background: 'lightblue' }}>
                <Toolbar className={classes.toolbar}>
                </Toolbar>
            </AppBar>
            <Drawer 
                anchor='right'
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, this.state.openRight && classes.drawerPaperClose),
                }}
                openRight={this.state.openRight}
            >
                <div className={classes.toolbarIconRight}>
                    <IconButton onClick={this.handleRightDrawer}>
                        { this.state.iconRight ? <HelpIcon fontSize="large"/> : <ChevronRightIcon fontSize="large"/> }          
                    </IconButton>
                </div>
                <Divider />
            </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Main);