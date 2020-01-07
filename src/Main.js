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



makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    // Main landing page with all the columns
    paper: {
        width: 300,
    },
    // main column size
    paper1: {
        alignItems: 'center',
        display: 'flex',
        flexDirection:'column',
        padding: 0,
    },
    // height for the miscellaneous component and Eng and Dev
    fixedHeight1: {
        height: 375,
    },
    containerHeight: {
        height: 100,
    },
    
}));
let classes = makeStyles();
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
const fixedHeightPaper1 = clsx(classes.paper1, classes.fixedHeight1);
const fixedHeightPaper2 = clsx(classes.paper1);
const containerHeightPaper = clsx(classes.paper, classes.containerHeight);


class Main extends Component{
    render(){
        return(
            <Grid container
                alignItems="stretch"
            >
                <Grid item xs={4} alignItems="stretch">
                    <Paper className={}>
                        <AdminServices />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>  
                        <UserServices />
                    </Paper>
                </Grid>
                {/* <Grid item xs={4}>
                    <Paper>
                        <EngAndDev />
                    </Paper>
                    <Paper>
                        <Miscellenous />
                    </Paper>
                </Grid> */}
            </Grid>
        );
    }
}

export default Main;