import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    // to make  Single-Page Application we have to use the instead of a tag we can use Link tag and to show highlight use the NavLink
    <nav>
      <ul className="navbar_list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact US</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
