/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import React from "react";
import logo from '../assest/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import custumecss from '../assest/css/App.css'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
  <>
      {/* home page header Section  */}
      <header className="hero">
        <div className="container">
            <h1 className="display-4">Welcome to My Portfolio!</h1>
            <p className="lead">Hi, I’m Rouhollah Kamali, a passionate web developer. I specialize in creating dynamic web applications that provide seamless user experiences. With a strong back-end technologies, I am dedicated to continuous learning and improvement in the ever-evolving world of software engineering</p>
            <Link className="btn btn-primary btn-lg" to='/about'>Read more about me</Link>
        </div>
    </header>
      </>
      );
   }
      

