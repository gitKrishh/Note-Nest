import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <div style={{ display: 'flex' }}>
      <Navs />
      <div style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default App
