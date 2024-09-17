import React from "react";
import logo from '../logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import custumecss from '../App.css'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
  <>
<section  className="py-3 py-md-5">
  <div  className="container">
    <div  className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div  className="col-12">
      <h1  className="display-4">Welcome to my website!</h1>
      <p  className="lead mission-statement">I create impactful experiences that shine across all platforms, blending creativity with technology to elevate your brand.</p>
      <a  className="btn btn-primary btn-lg" href="about.html" role="button">Learn More About Us</a>

    
      </div>
    </div>
    </div>
</section>


     
      
      </>
      );
   }
      

