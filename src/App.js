import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { Landing } from "./components/Landing";
import  Dashboard  from "./components/Dashboard/Dashboard";
import { Services } from "./components/services/Services";
import { Clients } from "./components/Clients/Clients";
import { Team } from "./components/Team Members/Team";
import { createTheme, ThemeProvider } from "@mui/material/styles";


function App() {
  const theme = createTheme({
    palette:{
      secondary:{
        main:'#6A0DAD'
      }
    }
  });
  return (
    <div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team-members" element={<Team />} />
          
        </Routes>
      </BrowserRouter>
      
    </ThemeProvider>
    </div>
  );
}

export default App;
