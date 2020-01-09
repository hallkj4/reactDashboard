import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

export default function Title(props) {
  return (
    <Typography component="h2" variant="h5" color="primary">
      <Box fontWeight="fontWeightBold" m={1} paddingBottom={3} paddingTop={0}>
        {props.children}
      </Box>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};