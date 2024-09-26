/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import React from "react";
import logo from './assest/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Outlet, Link } from 'react-router-dom';

// The main layout contains a Nav menu header and footer that all pages use it

const MainLayout = () => {
  return (
  <>
   {/* navbar Section  */}
   <nav  className="navbar navbar-expand-lg "> 
      <div  className="container-fluid">
        <a  className="navbar-brand" href="#"> <img src={logo} alt="..." height="60" /></a>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link text-black" to="/">Home</Link>
            </li>
            <li  className="nav-item">
             <Link className="nav-link" to="/services">Services</Link>
            </li>    
            <li  className="nav-item">
             <Link className="nav-link" to="/projects">Projects</Link>
            </li>  
            <li  className="nav-item">
             <Link className="nav-link" to="/about">About</Link>
            </li>  
            <li  className="nav-item">
             <Link className="nav-link" to="/Contactus">Contact us</Link>
            </li>     
          </ul>
        </div>
      </div>
    </nav>
    <nav>    
     </nav>      
      {/* end navbar Section  */}   

       {/* nested routes to rendere child route components  */}   
        <Outlet />  
         {/* footer Section  */}    
        <footer>
        <div className="container text-center">
            <p>© Rouhollah Kamali 2024. All rights reserved.</p>
            <Link to="https://github.com/farshaduk" className="btn btn-link" target="_blank">My GitHub</Link>
        </div>
    </footer>
     {/* end footer Section  */}   
  </>
  );
};

    
export default MainLayout;