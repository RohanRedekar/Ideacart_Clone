import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../../Pages/About";
import { Contact } from "../../Pages/Contact";
import { LandingPage } from "../../Pages/landingPage";
import { SignIn } from "../../Pages/SignIn";
import { SignUp } from "../../Pages/SignUp";
import { SingleBook } from "../../Pages/SingleBook";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/book/:id" element={<SingleBook/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
};
