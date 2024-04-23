import { useState } from 'react'
import './App.css'
//import './App.css'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './NotFound';
import Home from './components/auth/Home'; // Adjust the path accordingly
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TaskForm from './pages/TaskForm';

function App() {
return (
    <>
       <div>
      
      <Router>
        <Routes>
           <Route exact path="/" element={<TaskForm />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/register/Login" element={<Login />} />
            <Route exact path="/register/Login/register" element={<Register/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
