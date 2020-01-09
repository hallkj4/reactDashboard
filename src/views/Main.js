import React, { Component } from "react";
import AdminServices from '../components/adminServices';
import UserServices from '../components/userServices';
import EngAndDev from '../components/engAndDev';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import HelpDrawer from '../components/HelpDrawer';

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
        height: 800,
        borderBottom: 'darkblue',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
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
    appBar: {
        marginLeft: theme.spacing(9),
        marginRight: theme.spacing(9),
        top: theme.spacing(13),  
        marginBottom: theme.spacing(3),
        borderBottom: '#005aca',
        borderBottomStyle: 'solid',
        borderBottomWidth: '5px',
        width: `calc(100% - ${theme.spacing(9)*2}px)`,
        zIndex: theme.zIndex.drawer -1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        color: '#007bd2',
    },
    toolbar: {
        alignItems: 'flex-start',
        color: "#007bd2",
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
            contentShift: true,
        }
        this.handleContentShift = this.handleContentShift.bind(this)
    }
    
    handleContentShift = (contentShiftCallback) => {
        this.setState({
            contentShift: contentShiftCallback,
        })
    }
    render(){
        const {classes} = this.props;
        const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
        const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight);
        const fixedHeightPaper3 = clsx(classes.paper1, classes.fixedHeight3);
        return(
            <div >
                <Grid container 
                    className = {clsx(classes.content, {
                    [classes.contentShift]: this.state.contentShift})} 
                    flexDirection='row'
                >
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
                        <Paper className={fixedHeightPaper1}>
                            <EngAndDev />
                        </Paper>
                    </Grid>
                </Grid>
                <AppBar 
                    position="absolute" 
                    className={clsx(classes.appBar)}
                    style={{ background: '#e5f4fe' }}
                >
                    <Toolbar className={classes.toolbar}>
                    </Toolbar>
                </AppBar>
                <HelpDrawer shiftCallback={this.handleContentShift}/>
            </div>
        );
    }
}

export default withStyles(styles)(Main);