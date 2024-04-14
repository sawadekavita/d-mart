import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Login from "./components/Login";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/contactus" Component={ContactUs} />
        <Route exact path="/aboutus" Component={AboutUs} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/products/:id" Component={Product} />

      </Routes>
    </>
  );
}

export default App;
