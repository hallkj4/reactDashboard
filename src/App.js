import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Dashboard from './Dashboard';
import Route from './Route';
import Footer from './Footer';

export default function App() {
  return (
    <Container maxWidth={false}>
      <Box my={4.5}>
        <Dashboard />
      </Box>
      <Footer />
    </Container>
  );
}