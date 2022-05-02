import React from "react";
import "./App.css";
import Counter from "./components/counterComponents/Counter";
import { Profile } from "./components/usersComponents/Profile";
import { useSelector } from "react-redux";
import Theme from "./components/themeComponents/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/homeComponents/Home";

function App() {
  const color = useSelector((state) => state.theme.color);
  const styles = { backgroundColor: color };
  return (
    <div className="App" style={styles}>
      <BrowserRouter>
        <Theme />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
