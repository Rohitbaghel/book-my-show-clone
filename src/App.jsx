import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar.components";
import { Movies } from "./components/Movies";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { ProductDetails } from "./components/ProductDetails";
import { Cinema } from "./components/Cinema";
import { Play } from "./components/Play";
import { Laughter } from "./components/laughterHome";
import {Food} from "./components/Food";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:Id" element={<ProductDetails />}></Route>
        <Route path="/cinema" element={<Cinema />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/events" element={<Laughter />}></Route>
      </Routes> */}
      <Food/>
    </div>
  );
}

export default App;
