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
          ? "text-gray-800 hover:text-gray-500 underline font-extrabold"
          : ""
      }
    >
      <p className="text-lg">{label}</p>
    </NavLink>
  );
};

export default NavLinkItem;