import React from 'react';
import { NavLink } from 'react-router-dom';

// import "./Navbar.css";  <-- đã bỏ dòng này

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Viết bài mới
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
