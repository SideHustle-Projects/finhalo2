import { LineChart } from "./ChartBox";
import React from "react";
import { Navbar } from "../Navbar";
import { Grid } from "@mui/material";
import { Transactions } from "./Transactions";
import { Cards } from "./Cards";

export const Dashboard = () => {
  return (
    <div>
      <Navbar title="dashboard" />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <LineChart />
          <Transactions />
        </Grid>
        <Grid item xs={12} sm={5} lg={4}>
          <Cards />
        </Grid>
      </Grid>
    </div>
  );
};
