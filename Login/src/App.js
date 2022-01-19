import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Logout from "./components/Logout";
import { LoginHooks } from "./components/LoginHooks";
import { LogoutHooks } from "./components/LogoutHooks";

function App() {
  return (
    <div className="App">
      {/* <h2>Login</h2> */}
      <LoginHooks />
      <LogoutHooks />
      <br />
    </div>
  );
}

export default App;
