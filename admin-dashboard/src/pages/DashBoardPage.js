import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import Dashboard from '../components/Dashboard/Dashboard';
import { Box, Container } from '@mui/material';

const DashBoardPage = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <TopBar />
        <Container sx={{ paddingTop: 4 }}>
          <Dashboard />
        </Container>
      </Box>
    </Box>
  );
};

export default DashBoardPage;
