//app.js
import React from "react";
// import Header from "./components/contentComponents/Header";
// import Home from "./components/contentComponents/Home";
// import Contact from "./components/contentComponents/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/contentComponents/Login";
import Dashboard from "./components/contentComponents/AdminComponents/Dashboard";
import "./App.css"
const App = () => {
  return (
    <div>
      
   <Dashboard/>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
