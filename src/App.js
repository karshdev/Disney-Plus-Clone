import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Deatails from './components/Deatails'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App(){
    return(
      <div className="App">
        <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<Deatails />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </Router>
        </div>
    )
}