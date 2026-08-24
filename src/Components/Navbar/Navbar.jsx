import React from "react";
import Logo from "../../../public/Navbar-img/Logo.png";
import { navLinks } from "../../Sevices/navLinks.js";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="Container_1200 flex items-center justify-between py-5">

        <img
          src={Logo}
          alt="Logo"
          className="w-[150px]"
        />

        <ul className="navLinks flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}>
              {item.title}

              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <IoSearch className="text-[20px]" />

          <FaUser className="text-[18px]" />

          <span className="flex items-center gap-1 text-[14px]">
            <FaCartShopping className="text-[18px]" />
            (0)
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;