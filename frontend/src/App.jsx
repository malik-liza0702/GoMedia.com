// import { useState } from 'react'
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/homepage/Home";
import Blog from "./pages/blogpage/Blog";
import Contact from "./pages/contactpage/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

import Whyus from "./pages/whyuspage/Whyus";
import Login from "./pages/login/Login";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/why-us" element={<Whyus></Whyus>}></Route>
        <Route path="/contact-us" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
