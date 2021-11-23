import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DesktopScreen from "./components/DesktopScreen/DesktopScreen";

// Pages
import Splash from "./pages/splash/Splash";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import LifeStyle from "./pages/LifeStyle/LifeStyle";
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import Connect from "./pages/Connect/Connect";
import Notification from "./pages/Notification/Notification";
import Chat from "./pages/Chat/Chat";
import Friend from "./pages/UserProfile/UserProfile";
import Group from "./pages/Group/Group";
import Menu from "./pages/Menu/Menu";

function App() {
  let screenWidth = window.innerWidth;
  let desktopScreen = false;
  if (screenWidth > 1024) {
    desktopScreen = true;
  }

  const [isMenu, setIsMenu] = useState(false);
  return desktopScreen ? (
    <DesktopScreen />
  ) : (
    // <Splash />
    <>
      <Router>
      <Menu setIsMenu={setIsMenu} isMenu={isMenu}/>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home setIsMenu={setIsMenu}/>} />
          <Route path="/lifestyle" element={<LifeStyle setIsMenu={setIsMenu}/>} />
          <Route path="/post" element={<Post setIsMenu={setIsMenu}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connect" element={<Connect setIsMenu={setIsMenu}/>} />
          <Route path="/notification" element={<Notification setIsMenu={setIsMenu}/>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/group" element={<Group />} />
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
