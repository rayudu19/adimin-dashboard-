import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Dashboard, People, Settings, BarChart } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: '100vh', bgcolor: '#f4f6f8' }}>
      <List>
        <ListItem button component={Link} to="/">
          <Dashboard />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <People />
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <Settings />
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <BarChart />
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default Sidebar;
