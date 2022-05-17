import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './components/Login/Login';
import Card from './components/Clients/Card';
import Landing from './components/Dashboard/Landing';
import {Services} from './components/services/Services';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route path='/' element = {<Landing />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/clients' element = {<Card />}></Route>
        <Route path='/services' element = {<Services/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
