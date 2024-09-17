import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Core/Home";
import About from "./Components/About"
import MainLayout from './MainLayout';

const MainRouter =() =>{
    return(
        <div>
        <Routes>

            
        {/* <Route path="/" exact element={<Home />}></Route>        
        <Route  path="/About" exact element={<About />} /> */}

        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="about" element={<About />} />
        {/* Add other routes here */}
      </Route>

        </Routes>
   </div>
    )
   
};

export default MainRouter;