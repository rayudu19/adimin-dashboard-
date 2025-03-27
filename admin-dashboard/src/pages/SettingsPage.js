import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import { Box, Container } from '@mui/material';

const SettingsPage = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1}>
        <TopBar />
        <Container sx={{ paddingTop: 4 }}>
          <h2>Settings</h2>
          {/* Implement settings features here */}
        </Container>
      </Box>
    </Box>
  );
};

export default SettingsPage;
