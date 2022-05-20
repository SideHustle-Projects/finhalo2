import { LineChart } from "./ChartBox";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Transactions } from "./Transactions";
import { Cards } from "./Cards";
import Paper from '@mui/material/Paper';

export const Dashboard = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    let data = sessionStorage.getItem('data');
    setName(data)  
  }, [])
  
    return (
    <div>
      <Box sx={{ p: 3}}>
        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
          {" "}
          Welcome to Finhalo, {name}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={3}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} lg={8}>
            <Paper sx={{ mb: 3 }}>
              <LineChart />
            </Paper>
            <Transactions />
          </Grid>
          <Grid item xs={12} sm={5} lg={4}>
            <Cards />
          </Grid>


        </Grid>
      </Box>
    </div>
  );
};
