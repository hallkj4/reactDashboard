import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
    toolbar: {
        alignContent: 'center',
        alignItems: 'center',
        color: 'blue',
    },
    appBarTop: {
        paddingTop: 15,
        zIndex: theme.zIndex.drawer + 3,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    appBarBelowTop: {
        zIndex: theme.zIndex.drawer + 2,
        paddingTop: 45,
    },
    headerIcon: {
        height: '40px',
        width: '40px',
    },
    myIDFont: {
        fontFamily: 'Oswald-Regular',
        fontSize: '48px',
        color: '#056ACA',
        letterSpacing: '2.3px',
        height: '79px',
        marginLeft: 10,
    },
})

class TopAppBar extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div>
                <AppBar className={classes.appBarTop} style={{ background: 'white' }}>
                    <Toolbar className={classes.toolbar} style={{alignItems: 'center'}}>
                        <Typography noWrap >
                            <img src={process.env.PUBLIC_URL + '/ge_primary_blue_logo.svg'} alt="GE ICON" className={classes.headerIcon}/>
                            {" "}
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
                        <Typography noWrap className={classes.myIDFont} >
                            {" "}MyID
                        </Typography>
                        <div style={{ marginLeft: 'auto'}}>
                            <IconButton  alignItems='flex-end'>
                                <AccountCircle fontSize='large' color='primary' />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <AppBar className={classes.appBarBelowTop} style={{ background: 'linear-gradient(#3970a0, #00396e)' }}>
                    <Toolbar className={classes.toolbar}>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(TopAppBar);