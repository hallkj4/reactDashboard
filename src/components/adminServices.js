import React from 'react';
// import { ResponsiveContainer } from 'recharts';
import Title from './Title';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { AdminServicesList, BillingAndUsage } from './listItems';
import { Typography, Grid, Box } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';



export default function adminServices() {
    
    return (
        <React.Fragment>
          <Title>Admin Services</Title>
            <List disablePadding>{AdminServicesList}</List>
            <List disablePadding>{BillingAndUsage}</List>
        </React.Fragment>
      );
}