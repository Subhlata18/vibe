// import logo from './logo.svg';
import "./output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logincomponent from "./Routes/Login";
import React from "react";

import SignupComponent from "./Routes/signup";
import Home from "./Routes/home";
function App(){
  return (
    <div className="w-screen h-screen">
    <BrowserRouter> 
    
    <Routes>
   
      <Route path="/" element={<Hellocomponent/>}/>
      <Route path="/login" element={<Logincomponent/>} />
      <Route path="/signup" element={<SignupComponent/>} />
      <Route path= "/home" element={<Home/>} />

    </Routes>
    
    </BrowserRouter>
    </div>
  );


}
const Hellocomponent = () =>{
  return <div> this is from hello component</div>;
};
export default App;


