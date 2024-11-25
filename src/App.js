import React from "react";
import Header from "./components/LandingPages/Header";
import Home from "./components/LandingPages/Home";
import Contact from "./components/LandingPages/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import DemoMemo from "./components/LandingPages/AnyChart";
import Login from "./components/LandingPages/Login";
import Dashboard from "./components/AdminComponents/Dashboard";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
const AppWrapper = () => {
  const location = useLocation();

  const showHeader = location.pathname === '/dashboard' 

  return (
    <Provider store={store}>
      {/* <Header/> */}
      {!showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Provider>
  );
};

const App = () => (
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>
);

export default App;

