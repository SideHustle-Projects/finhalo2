import { LineChart } from "./ChartBox";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Transactions } from "./Transactions";
import { Cards } from "./Cards";

export const Dashboard = () => {
  return (
    <div>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, my: 3 }}>
          {" "}
          Welcome to Finhalo, Prudence
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          spacing={3}
          sx={{ p: 2 }}
        >
          <Grid item xs={12} lg={8}>
            <Box sx={{ mb: 3 }}>
              <LineChart />
            </Box>
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
