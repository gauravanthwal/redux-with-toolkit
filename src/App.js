import React from "react";
import "./App.css";
import Counter from "./components/counterComponents/Counter";
import { Profile } from "./components/usersComponents/Profile";
import { useSelector } from "react-redux";
import Theme from "./components/themeComponents/Theme";


function App() {
  const color = useSelector(state=> state.theme.color);
  const styles = {backgroundColor: color};
  return (
    <div className="App" style={styles}>
      <Profile/>
      <Counter/>
      <Theme/>
    </div>
  );
}

export default App;
