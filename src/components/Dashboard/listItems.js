import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import ApartmentIcon from "@mui/icons-material/Apartment";

import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeIcon from '@mui/icons-material/Home';

export const mainListItems = (
  <React.Fragment >
    <ListItemButton  component="a" href="/dashboard">
      <ListItemIcon>
        <DashboardIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component="a" href="/services">
      <ListItemIcon >
        <ShoppingCartIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Products & Services" />
    </ListItemButton>
    <ListItemButton component="a" href="/clients">
      <ListItemIcon>
        <PeopleIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItemButton>
    <ListItemButton component="a" href="/team-members">
      <ListItemIcon>
        <ApartmentIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Team Members" />
    </ListItemButton>
    <ListItemButton component="a" href="/">
      <ListItemIcon>
        <HomeIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Homepage" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor:'secondary.main', color: "#fff", pb:25  }}>
      
    </ListSubheader>
    <ListItemButton component="a" href="/login" >
      <ListItemIcon>
        <SettingsOutlinedIcon sx={{ color: "#fff"  }}/>
      </ListItemIcon >
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton component="a" href="/login">
      <ListItemIcon>
        <LogoutOutlined sx={{ color: "#fff"  }}/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
