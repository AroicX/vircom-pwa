import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopScreen from "./components/DesktopScreen/DesktopScreen";

// Pages
import Splash from "./pages/splash/Splash";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import LifeStyle from "./pages/LifeStyle/LifeStyle";

function App() {
  let screenWidth = window.innerWidth;
  let desktopScreen = false;
  if (screenWidth > 1024) {
    desktopScreen = true;
  }
  return desktopScreen ? (
    <DesktopScreen />
  ) : (
    // <Splash />
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
