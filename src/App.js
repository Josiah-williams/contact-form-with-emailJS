import React from "react";
import ContactUs from "./contact-us";
import './App.css';
import { Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <Routes>
       <Route exact path="/" element ={<ContactUs/>}>
        </Route>
        </Routes>
     </div>
  );
}

export default App;
