import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Navbar } from "./Navbar";
import img from "../utils/images/Daco_510624.png";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 10 }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            overflowX: "hidden",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" color="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, nulla?
            </Typography>
            <Typography sx={{ my: 5 }} variant="body2" color="#555">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. Sit officia non a.
            </Typography>
            <Button variant="contained" size="large" color="secondary">
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={img} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
