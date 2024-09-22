/*Rouhollah Kamali StudentID : 301495125    9/21/2024   */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Core/Home";
import About from "./Components/About"
import Contactus from './Components/Contactus'
import Services from './Components/Sevices'
import Projects  from './Components/Projects';
import MainLayout from './MainLayout';

const MainRouter =() =>{
    return(
        <div>      
      {/* Add other routes here */}
        <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="Contactus" element={<Contactus />} />     
      </Route>
        </Routes>
   </div>
    )   
};

export default MainRouter;