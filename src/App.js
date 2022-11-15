import "./App.css";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Container">
        
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Login />} />
            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
