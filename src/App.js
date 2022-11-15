import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="Container">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="detail/:id" element={<ProductDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
