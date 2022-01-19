
import './App.css';
import { Home } from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/navbar.components';
import Location from './components/Location';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
      {/* <Home/> */}
      {/* <Navbar /> */}
     <Location/>
  {/* <Footer/> */}
    </div>
  );
}

export default App;
