import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopScreen from "./components/DesktopScreen/DesktopScreen";

// Pages
import Splash from "./pages/splash/Splash";
import SignIn from "./pages/SignIn/SignIn";

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

          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
