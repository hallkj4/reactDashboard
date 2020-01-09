import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import {secondaryListItems} from '../components/listItems';

const drawerWidth = 300;
const styles = theme => ({
    toolbarIconLeft: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
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
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    },
});

class NavDrawer extends Component{
    constructor(props){
        super(props);
        this.state={
            openNavDrawer: true,
            navDrawerIcon: true,
        }
        this.handleNavDrawer = this.handleNavDrawer.bind(this)
    }
    handleNavDrawer = () => {
        this.setState({
            openNavDrawer: !this.state.openNavDrawer,
            navDrawerIcon: !this.state.navDrawerIcon,

        })
    };
    render(){
        const {classes} = this.props;
        return(
            <Drawer 
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, this.state.openNavDrawer && classes.drawerPaperClose),
                }}
                openNavDrawer={this.state.openNavDrawer}
            >
                <div className={classes.toolbarIconLeft}>
                    <IconButton onClick={this.handleNavDrawer}>
                    { this.state.openNavDrawer ? <MenuIcon fontSize="large"/> :         <ChevronLeftIcon fontSize="large"/> }
                    </IconButton> 
                </div>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        );
    }
}

export default withStyles(styles)(NavDrawer);