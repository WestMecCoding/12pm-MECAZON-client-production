// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./App.css";
import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import EmployeeLogIn from "./pages/EmployeeLogIn";
export default function App() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/product" element={<Product />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Groceries />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/Employee-log-in" element={<EmployeeLogIn />} />
          </Routes>
            <Body />
            <Footer />
        </Router>
      </div>
    );
  }
