import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
