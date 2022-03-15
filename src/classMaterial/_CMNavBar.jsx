import React from 'react';
import { NavLink } from 'react-router-dom';

function CMNavBar() {
  return (
    // prettier-ignore
    <nav className="sidenav CMNav">
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_01">
              W9 - First App
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_02">
              W9 - JSX
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week9_03">
              W9 - Form
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_props">
              W10 - Props
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_useState">
              W10 - useState
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_useEffect">
              W10 - useEffect
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_Events">
              W10 - Events
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/week10_Form">
              W10 - Form
            </NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default CMNavBar;
