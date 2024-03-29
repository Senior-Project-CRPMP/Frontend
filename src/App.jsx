import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './NotFound';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
return (
    <>
       <div>
      
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route component={NotFound} />
        </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
