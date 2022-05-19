import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Services } from "./components/services/Services";
import { Clients } from "./components/Clients/Clients";
import { Team } from "./components/Team Members/Team";
import { Navbar } from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const ch = window.location.pathname;
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        {/* {auth ? (
          <>
          </>
        ) : (
          ""
          )} */}
        <Navbar setAuth={setAuth} setOpen={setOpen} open={open} />
        {ch !== "/" && ch !== "/login" && (
          <Sidebar setOpen={setOpen} open={open} />
        )}
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 4 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/login"
              element={<Login auth={auth} setAuth={setAuth} />}
            />
            <Route path="/clients" element={<Clients />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team-members" element={<Team />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
