import React, { Component } from "react"
import AdminServices from './adminServices';
import UserServices from './userServices';
import EngAndDev from './engAndDev';
import Miscellenous from './miscellaneous';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles'



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    // Main landing page with all the columns
    paper: {
        width: 300,
    },
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
    
});


class Main extends Component{
    render(){
        const {classes} = this.props;
        const fixedHeightPaper = clsx(classes.paper1, classes.fixedHeight2);
        const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
        const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight);
        const fixedHeightPaper3 = clsx(classes.paper1, classes.fixedHeight3);
        const containerHeightPaper = clsx(classes.paper, classes.containerHeight);
        return(
            <Grid container >
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
        );
    }
}

export default withStyles(styles)(Main);