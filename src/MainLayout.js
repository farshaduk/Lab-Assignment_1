import React from "react";
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
  <>
   <nav  className="navbar navbar-expand-lg bg-body-tertiary">
 
      <div  className="container-fluid">
        <a  className="navbar-brand" href="#"> <img src={logo} alt="..." height="60" /></a>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
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
          <form  className="d-flex" role="search">
            <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button  className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <nav>    
     </nav>
  
     <Outlet />
  
     <footer  className="text-center text-lg-start text-white mt-5" style={{ backgroundColor: '#1c2331' }} >
     <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>         
    
    
      </section>

     </footer>
  </>
  );
};

    
export default MainLayout;