import React from 'react';
import {NavLink} from "react-router-dom"

const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];

function Navbar() {
  return (
<nav className="navbar">
<ul>
{links.map((link) => {
  return (
    <li key={link.text}>
      <NavLink
        to={link.path}
        //   className={({ isActive}) =>
        // isActive ? 'active_class' : undefined
        // }
        // style={({ isActive }) => ({
        //   color: isActive ? "red" : undefined,
        // })}
        >
        {link.text}
      </NavLink>
    </li>
  );
})}
</ul>
</nav>
  );
}

export default Navbar;
