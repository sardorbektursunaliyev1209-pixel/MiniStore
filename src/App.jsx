import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About.jsx";
import Shop from "./Pages/Shop/shop";
import Home from "./Pages/Home/Home"; 
import Eror from "./Pages/Eror/eror.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Eror/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;