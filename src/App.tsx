import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react'
import './App.css'

// Page imports
import Home from "../pages/Home";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Certifications from "../pages/Certifications";
import Projects from "../pages/Projects";
import References from "../pages/References";
import Documents from "../pages/Documents";
import Credit from "../pages/Credit";

// Component imports
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Defines routing
function Root() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/certifications" element={<Certifications />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/references" element={<References />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path="/credit" element={<Credit />}/>
      </Routes>
    </>
  );
}
const router = createBrowserRouter(
  [{path:"*", Component:Root}]
);


export default function App() {



  return (
    <>
      {/* header */}
      <Header/>
      {/* Navbar */}
      <RouterProvider router={router}/>
      {/* main content */}

      {/* footer */}
      <Footer/>
    </>
  );
}


