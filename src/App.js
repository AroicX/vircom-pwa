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
import Post from "./pages/Post/Post";
import Profile from "./pages/Profile/Profile";
import Connect from "./pages/Connect/Connect";
import Notification from "./pages/Notification/Notification";
import Chat from './pages/Chat/Chat';
import Friend from './pages/UserProfile/UserProfile';

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
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/notification" element={<Notification />}/>
          <Route path="/chat" element={<Chat />}/>
          <Route path="/friend" element={<Friend />}/>
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
