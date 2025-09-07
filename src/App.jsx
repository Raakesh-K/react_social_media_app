import { useState, useEffect } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Nav from "./assets/components/Nav";
import Newpost from "./assets/components/Newpost";
import Postpage from "./assets/components/Postpage";
import Missing from "./assets/components/Missing";
import Footer from "./assets/components/Footer";
import Home from "./assets/components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./assets/components/About";
import { format } from "date-fns";
import Postapi from "../APIPOST/Postapi";
import EditPost from "./assets/components/editpost";
import useWindowSize from "../hooks/windowscreen";
import { DataProvider } from "../hooks/datacontext";
function App() {
  return (
    <div className="App">
    
      <DataProvider>
      
        <Header title="social media app" /> <Nav />
        <Routes>
        
          {/* Home Route */} <Route path="/" element={<Home />} />
          {/* New Post Route */} <Route path="/post" element={<Newpost />} />
          {/* Edit Post Route */}
          <Route path="/edit/:id" element={<EditPost />} />
          {/* Single Post Page */}{" "}
          <Route path="/post/:id" element={<Postpage />} /> {/* About Page */}
          <Route path="/about" element={<About />} /> {/* 404 / Missing */}
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}
export default App;
