import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'


import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import AppBanner from "./components/AppBanner";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage"
import ExperiencePage from "./components/ExperiencePage"
import RegisterScreen from "./components/RegisterScreen";

import "./css/App.css"

const PageNotFound = () => {
    return <div className="pagenotfound">Page Not Found</div>;
  };
  
  export const App = () => {
    return (
      <BrowserRouter> 
        <div className="app">
          <AppBanner/>
          <Routes> 
            <Route exact path="/" element={<SplashScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route exact path="/experience" element={<ExperiencePage/>} />
            <Route exact path="/register" element={<RegisterScreen/>} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;
  