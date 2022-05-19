// import {
//   Badge,
//   Box,
//   Button,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";
// import MuiAppBar from "@mui/material/AppBar";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import React from "react";

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// export const Navbar = ({ title, open, setOpen }) => {
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   return title !== "dashboard" ? (
//     <Box sx={{ flexGrow: 1, zIndex: 10 }}>
//       <AppBar position="static" color="inherit" open={open}>
//         <Toolbar sx={{ height: 80 }}>
//           <IconButton
//             color="secondary"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h4"
//             color="secondary"
//             component="div"
//             sx={{ flexGrow: 1 }}
//           >
//             Finhalo
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="secondary"
//               href="/clients"
//             >
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="secondary"
//               href="/services"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-haspopup="true"
//               href="/login"
//               color="secondary"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               // aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               // onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   ) : (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" color="inherit">
//         <Toolbar sx={{ height: 80 }}>
//           <Typography
//             variant="h4"
//             color="secondary"
//             component="div"
//             sx={{ flexGrow: 1 }}
//           >
//             Finhalo
//           </Typography>
//           <Button
//             color="secondary"
//             variant="outlined"
//             sx={{ mr: 2 }}
//             href="/login"
//           >
//             Login
//           </Button>
//           <Button color="secondary" variant="contained" href="/login">
//             Sign up
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

import {
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
<<<<<<< HEAD

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
=======
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MuiAppBar from "@mui/material/AppBar";
import MailIcon from "@mui/icons-material/Mail";
// import { useSelector } from "react-redux";
import MoreIcon from "@mui/icons-material/MoreVert";

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 4,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Navbar = ({ setAuth, open, setOpen }) => {
  // const { user } = useSelector((state) => state.authReducer);
  const { user } = "useSelector((state) => state.authReducer)";
  const ch = window.location.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return ch !== "/" && ch !== "/login" ? (
    <div>
      <AppBar position="fixed" color="inherit" open={open}>
        <Toolbar sx={{ height: 80 }}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="secondary"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
            variant="h4"
          >
            Finhalo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="secondary"
            href="/clients"
          >
            <StyledBadge badgeContent={4} color="warning">
              <MailIcon />
            </StyledBadge>
          </IconButton>

          <IconButton
            sx={{ mr: 5 }}
            color="secondary"
            size="large"
            href="/services"
          >
            <StyledBadge badgeContent={4} color="warning">
              <NotificationsNoneSharpIcon />
            </StyledBadge>
          </IconButton>
          <Avatar alt="" src="" sx={{ width: 50, height: 50, mr: 3 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ mr: 1 }}>
              <Typography sx={{ color: "#000" }} variant="body2">
                {user
                  ? `
              ${user.firstname} ${user.lastname}
                `
                  : "Login"}
              </Typography>
              <Typography variant="caption">
                {user ? `${user.defaultRole}` : ""}
              </Typography>
            </Box>
            <IconButton sx={{ mr: 3 }}>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      ;
    </div>
>>>>>>> fd817b9a905b8aa83fb0b96c08c9e0f39c6c519c
  ) : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ height: 80 }}>
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
