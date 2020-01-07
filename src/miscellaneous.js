import React from 'react';
// import { ResponsiveContainer } from 'recharts';
import Title from './Title';
import { List, ListItem } from '@material-ui/core';
import { miscellaneous } from './listItems';

export default function Miscellaneous() {
    
    return (
        <React.Fragment>
          <Title>Miscellaneous</Title>
            <List>{ miscellaneous }</List>
        </React.Fragment>
      );
}