// import {
//   Badge,
//   Box,
//   Button,
//   IconButton,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import React, {useState, useEffect} from "react";
// import NotificationsNoneSharp from "@mui/icons-material/NotificationsNoneSharp";
// import MenuIcon from "@mui/icons-material/Menu";
// import { styled } from "@mui/material/styles";
// import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
// import Avatar from "@mui/material/Avatar";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import MuiAppBar from "@mui/material/AppBar";
// import MailIcon from "@mui/icons-material/Mail";
// // import { useSelector } from "react-redux";
// import MoreIcon from "@mui/icons-material/MoreVert";

// const drawerWidth = 240;

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     right: 2,
//     top: 4,
//   },
// }));

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

// export const Navbar = ({ title }) => {


//   return title === "dashboard" ? (
// : (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" color="inherit">
//         <Toolbar sx={{ height: 80 }}>
//           <Typography
//             variant="h4"
//             color="secondary"
//             component="div"
//             sx={{ flexGrow: 1, fontWeight:800 }}
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
import React, {useState, useEffect} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import NotificationsNoneSharp from "@mui/icons-material/NotificationsNoneSharp";
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
    const [name, setName] = useState("")
  useEffect(() => {
    let data = sessionStorage.getItem('data');
    setName(data)  
}, [])
  // const { user } = useSelector((state) => state.authReducer);
  const { user } = "useSelector((state) => state.authReducer)";
  const ch = window.location.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return ch !== "/" && ch !== "/login" ? (
    <div>
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
        </div>
  )  : (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ height: 80 }}>
          <Typography
            variant="h4"
            color="secondary"
            component="div"
            sx={{ flexGrow: 1 }}
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