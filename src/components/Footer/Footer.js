import React from 'react';

function Footer(){
  return (
    <div className="footer-container">
      <div className='footer-major'>
        <div className='footer-text'>
        <h1> Finhalo </h1>
        <p> ...your path to financial freedom... </p>
        </div>
      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/dashboard"> Dashboard </a> </li>
        <li> <a href="/clients"> Clients</a> </li>
        <li> <a href="/services"> Services </a> </li>
        <li> <a href="/team-members"> Team Members </a> </li>
        <li> <a href="/login"> Logout </a> </li>
      </ul>
    </div>
    
      <div style = {{textAlign: 'center'}}>
        <p> &copy; SideHustle ReactJS Interns (Group 82) 2022 </p>
      </div>
    </div>
  );
}

export default Footer;