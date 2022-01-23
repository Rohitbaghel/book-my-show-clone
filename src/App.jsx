import "./App.css";
import { Home } from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar.components";
import { Movies } from "./components/Movies";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { ProductDetails } from "./components/ProductDetails";
import {Cinema} from "./components/Cinema";
import {Laughter} from './components/Laughter'
import {GiftCart} from './components/GiftCart'
import {Offers} from './components/Offers'



function App() {
  return (
    <div className="App">

    
      {/* <Navbar />
      <Home/>
      <Footer/> 
      <Login />
      <Logout />
      <Movies />
      <ProductDetails />
      <Cinema /> */}
      <Laughter/>
      <GiftCart/>
      <Offers/>

    </div>
  );
}

export default App;
