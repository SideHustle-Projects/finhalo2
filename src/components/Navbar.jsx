import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import React, {useState, useEffect} from "react";
import NotificationsNoneSharp from "@mui/icons-material/NotificationsNoneSharp";

export const Navbar = ({ title }) => {
  const [name, setName] = useState("")
  useEffect(() => {
    let data = sessionStorage.getItem('data');
    setName(data)  
}, [])
  return title === "dashboard" ? (
< AppBar position="static" sx={{zIndex: 1}}>
          <Toolbar
            sx={{
              backgroundColor:"white",
              pr: '24px' // keep right padding when drawer closed
            }}
          >
            
            <Typography
              component="h1"
              variant="h6"
              color="secondary.main"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <h3>Welcome to Finhalo, {name}</h3>
            </Typography>
            <IconButton
            size="large"
            color="secondary"
            >
            <Badge badgeContent={4} color="warning">
              <MailIcon />
            </Badge>
          </IconButton>
            <IconButton size="large" color="secondary">
              <Badge badgeContent={4} color="warning">
                <NotificationsNoneSharp />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography
            variant="h4"
            color="secondary"
            component="div"
            sx={{ flexGrow: 1, fontWeight:800 }}
          >
            Finhalo
          </Typography>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ mr: 2 }}
            href="/login"
          >
            Login
          </Button>
          <Button color="secondary" variant="contained" href="/login">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
