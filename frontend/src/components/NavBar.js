import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure you create this CSS file for styling

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="active-link">
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/professors" activeClassName="active-link">
            Professors
          </NavLink>
        </li>
        <li>
          <NavLink to="/reviews" activeClassName="active-link">
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;