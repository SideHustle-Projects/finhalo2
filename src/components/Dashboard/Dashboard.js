import * as React from 'react';
import { styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MailIcon from "@mui/icons-material/Mail";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsNoneSharp from "@mui/icons-material/NotificationsNoneSharp";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { LineChart } from "./ChartBox"
import { Cards } from "./Cards";
// import { useTheme, useMediaQuery } from '@material-ui/core';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


function DashboardContent() {
  const [name, setName] = useState("")
  useEffect(() => {
    let data = sessionStorage.getItem('data');
    setName(data)
}, [])

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor:"white",
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="secondary"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
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
        <Drawer  variant="permanent" open={open} PaperProps={{
    sx: {
      backgroundColor: "secondary.main",
      color: "white",
    }
  }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer} colour="white">
              <ChevronLeftIcon sx={{ color: "#fff"  }} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{   colour:'warning'}}>
            {mainListItems}
            <Divider sx={{position:'fixed'}} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4,}}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                <LineChart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                    mb: 2
                  }}
                >
                  <Deposits />
                </Paper>
                {/* Cards */}
              {/* <Grid item xs={12} md={4} lg={3} } sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240
                  }}> */}
                    <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 145
                  }}
                >
                  <Cards />
                </Paper>
                  
              {/* </Grid> */}
                
              </Grid>
              {/* Recent Transactions */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            
          </Container>
          <Footer/>
        </Box>
      </Box>
    
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
