import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography
            variant="h4"
            color="secondary"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Finhalo
          </Typography>
          <Button color="secondary" variant="outlined" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button color="secondary" variant="contained">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
