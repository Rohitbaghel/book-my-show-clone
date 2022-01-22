import "./App.css";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar.components";
import { Movies } from "./components/Movies";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { ProductDetails } from "./components/ProductDetails";
import { Cinema } from "./components/Cinema";
import { Play } from "./components/Play";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home/>
      {/* <Footer/>  */}
      {/* <Login /> */}
      {/* <Logout /> */}
      {/* <Movies /> */}
      {/* <ProductDetails /> */}
      {/* <Cinema /> */}

      {/* <ProductDetails />
      <Cinema /> */}
      <Play />
    </div>
  );
}

export default App;
