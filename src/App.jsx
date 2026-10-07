import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPages from "./Pages/LandingPages";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header/Header" 
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Header/>
       
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>  
    </div>
  );
};

export default App;