import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './NotFound';
=======
//import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './NotFound';
import Home from './components/auth/Home'; // Adjust the path accordingly
import Header from './components/common/Header';
import Footer from './components/common/Footer';

>>>>>>> main
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
return (
    <>
       <div>
      
      <Router>
        <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route component={NotFound} />
=======
           
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/register/Login" element={<Login />} />
            <Route exact path="/register/Login/register" element={<Register/>} />
            <Route path="*" element={<NotFound />} />
>>>>>>> main
        </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
