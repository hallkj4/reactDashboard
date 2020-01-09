import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import HelpIcon from '@material-ui/icons/Help';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';

const drawerWidth=300;

const styles = theme => ({
    toolbarIconRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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
        width: 70,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        // width: theme.spacing(3),
        // [theme.breakpoints.up('sm')]: {
        // width: theme.spacing(9),
        // },
    },
})

class HelpDrawer extends Component {
    constructor(props){
        super(props);
        this.state={
            openHelpDrawer: true,
            helpDrawerIcon: true,
            contentShift: this.props.shift,
        }
        this.handleHelpDrawer = this.handleHelpDrawer.bind(this)
    }
    handleHelpDrawer (){
        this.setState({
            openHelpDrawer: !this.state.openHelpDrawer,
            helpDrawerIcon: !this.state.helpDrawerIcon,
        })
        this.handleContentShiftChild(!this.state.openHelpDrawer);
    };
    handleContentShiftChild = (shiftCallback) => {
        this.props.shiftCallback(shiftCallback); 
    }
    render(){
        const { classes } = this.props;
        return(
            <Drawer 
                anchor='right'
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, this.state.openHelpDrawer && classes.drawerPaperClose),
                }}
                openHelpDrawer={this.state.openHelpDrawer}
            >
                <div className={classes.toolbarIconRight}>
                    <IconButton onClick={this.handleHelpDrawer}>
                        { this.state.helpDrawerIcon ? <HelpIcon fontSize="large"/> : <ChevronRightIcon fontSize="large"/> }          
                    </IconButton>
                </div>
                <Divider />
            </Drawer>
        )
    }
}

export default withStyles(styles)(HelpDrawer);