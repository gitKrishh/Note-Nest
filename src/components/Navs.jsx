import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'; // We'll create this CSS file next

const Navs = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sticky" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Sticky Notes
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/feedback" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navs;
