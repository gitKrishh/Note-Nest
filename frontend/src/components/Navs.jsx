import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

import './Sidebar.css';

const Navs = () => {
  const sidebarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Sidebar slide-in animation
    gsap.from(sidebarRef.current, {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Stagger nav link animations
    gsap.from(linksRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    });
  }, []);

  return (
    <div className="sidebar" ref={sidebarRef}>
      <nav>
        <ul className="nav-links">
          {[
            { to: '/home', label: 'Home' },
            { to: '/sticky', label: 'Sticky Notes' },
            { to: '/about', label: 'About' }
          ].map((link, i) => (
            <li key={link.to} ref={(el) => (linksRef.current[i] = el)}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navs;
