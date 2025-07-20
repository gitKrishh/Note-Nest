import { useState } from 'react'
import './App.css'
import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/About';
import { Outlet } from 'react-router-dom'
import Navs from './components/Navs'


function App() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'underline',
  }
  

  return (
    <div className="layout">
      <Navs />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App
