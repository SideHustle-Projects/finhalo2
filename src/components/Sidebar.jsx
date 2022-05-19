import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  flexGrow: 1,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ history, open, getOpen, setOpen }) => {
  const itemsList = [
    {
      text: "Dashboard",

      onClick: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      text: "Clients",
      onClick: "/clients",
      icon: <ApartmentIcon />,
    },

    {
      text: "Services",
      onClick: "/services",
      icon: <DescriptionIcon />,
    },
    {
      text: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      text: "Log out",
      icon: <LogoutOutlinedIcon />,
    },
  ];
  const handleDrawerClose = () => {
    setOpen(false);
    getOpen(open);
  };

  const handleRoute = (o) => {
    if (o !== undefined) {
      window.location = o;
    }
  };

  return (
    <Drawer variant="permanent" open={open}>
      <Box
        sx={{
          backgroundColor: "purple",
          color: "#fff",
          height: "90vh",
        }}
      >
        <DrawerHeader>
          <Typography sx={{ textAlign: "start", ml: 4, mt: 3 }} variant="h4">
            Finhalo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List sx={{ mb: 10 }}>
          {itemsList.map((item, index) => {
            return (
              <ListItem
                button
                key={index}
                onClick={() => handleRoute(item.onClick)}
              >
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#fff" }} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
