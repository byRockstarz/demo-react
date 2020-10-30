import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Layout({ children }) {
  return (
    <div>
      <ul className="horizontal ho2">
        <FaHome size="15px" />
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/hardware">Hardware</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
}

export default Layout;
