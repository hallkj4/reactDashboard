import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Dashboard from './views/Dashboard';
import Footer from './staticComponents/Footer';
import NavDrawer from './staticComponents/NavDrawer';
import TopAppBar from './staticComponents/TopAppBar';

export default function App() {
  return (
    <Container maxWidth={false}>
      <NavDrawer />
      <TopAppBar />
      <Box my={4.5}>
        <Dashboard />
      </Box>
      <Footer />
    </Container>
  );
}