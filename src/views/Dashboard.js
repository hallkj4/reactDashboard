import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import SearchBar from 'material-ui-search-bar';
import Route from './CXPRouteView';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'absolute',
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
  containerHeight: {
    height: 140,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper2 = clsx(classes.paper1, classes.fixedHeight)
  const containerHeightPaper = clsx(classes.paper, classes.containerHeight);

  return (
    <div className={classes.root}>
      <div className={clsx(containerHeightPaper)}/>
        <div className={fixedHeightPaper2}>
          <Route />
        </div>
    </div>
);}