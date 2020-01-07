import React from 'react';
// import { ResponsiveContainer } from 'recharts';
import Title from './Title';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { AccessManagement, PasswordManagement, Certificates } from './listItems';


export default function userServices() {
    
    return (
        <React.Fragment>
          <Title>User Services</Title>
            <List>{AccessManagement}</List>
            <List>{PasswordManagement}</List>
            <List>{Certificates}</List>
        </React.Fragment>
      );
}