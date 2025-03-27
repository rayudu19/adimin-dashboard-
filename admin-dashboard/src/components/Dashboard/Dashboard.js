import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { LinearProgress } from '@mui/material';
//import BarChart from '../Charts/BarChart';
//import LineChart from '../Charts/LineChart';
import DataTable from '../Tables/DataTable';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Sales Performance</Typography>
          {/* <BarChart /> */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">User Registration</Typography>
          {/* <LineChart /> */}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Progress</Typography>
          <LinearProgress sx={{ height: 10 }} variant="determinate" value={50} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">User Data</Typography>
          <DataTable />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
