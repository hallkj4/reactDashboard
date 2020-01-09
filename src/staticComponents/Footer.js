import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    appBarBottom: {
        zIndex: theme.zIndex.drawer + 5,
        width: `calc(100% - ${144}px)`,
        paddingTop: 100,
        top: 950,
        left: 72,
        right: 72,
    },
});

class Footer extends Component {
    render(){
        const {classes} = this.props;
        return(
            <AppBar position='absolute' className={classes.appBarBottom} style={{background: '#1C376E'}}>
                <Toolbar>
                    YAMMER
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Footer);