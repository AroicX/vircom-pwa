import React from "react";
import "./App.css";
import DesktopScreen from "./components/DesktopScreen/DesktopScreen";

// Pages
import Splash from './pages/splash/Splash';

function App() {
  let screenWidth = window.innerWidth;
  let desktopScreen = false;
  if (screenWidth > 1024) {
    desktopScreen = true;
  }
  return desktopScreen ? (
    <DesktopScreen />
  ) : (
    <Splash />
  );
}

export default App;