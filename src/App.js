import { Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import NavBar from "./Shared/Navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
