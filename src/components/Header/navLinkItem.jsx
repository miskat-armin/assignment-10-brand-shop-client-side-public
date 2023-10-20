import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-gray-800 dark:text-white hover:text-gray-500 hover:dark:text-text-gray-100 underline font-extrabold"
          : ""
      }
    >
      <p className="text-lg">{label}</p>
    </NavLink>
  );
};

export default NavLinkItem;