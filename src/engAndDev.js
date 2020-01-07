import React from 'react';
// import { ResponsiveContainer } from 'recharts';
import Title from './Title';
import { List, ListItem } from '@material-ui/core';
import { IAMResources } from './listItems';

export default function engAndDev() {
    
    return (
        <React.Fragment>
          <Title>Engineering And Development</Title>
            <List >{ IAMResources }</List>
        </React.Fragment>
      );
}

  