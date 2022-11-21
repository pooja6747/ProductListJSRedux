import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import About from "./components/About";



function App() {


  return (
    <>
      <BrowserRouter>
        <div className="Container">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Error />} />
            <Route path="about" element={<About/>}/>
           
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
