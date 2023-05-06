import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={ <Home /> } /> 
      <Route path="/" element={ <Login /> } /> 
    </Routes>
  )
} 