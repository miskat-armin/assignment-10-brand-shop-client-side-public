import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import NavLinkItem from "./navLinkItem";
import { useAuth } from "../../context/authContext";
import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const { user, Logout } = useAuth();

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login")
  }

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };



  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar shadow-lg p-0 bg-white dark:bg-base-200 z-10 sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FontAwesomeIcon icon={faBars} className="hover:scale-110" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
          >
            <li>
              <NavLinkItem to={"/"} label="Home" />
            </li>
            <li>
              <NavLinkItem to={"/add-product"} label="Add product" />
            </li>
            <li>
              <NavLinkItem to={"/my-cart"} label="My Cart" />
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">TechHarbor</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">
          <li>
            <NavLinkItem to={"/"} label="Home" />
          </li>
          <li>
            <NavLinkItem to={"/add-product"} label="Add product" />
          </li>

          <li>
            <NavLinkItem to={"/my-cart"} label="My Cart" />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type={`checkbox`}
              checked={theme === "light" ? false : true}
              onChange={handleToggle}
            />

            {/* sun icon */}
            <svg
              className={`swap-on fill-current w-10 h-10`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className={`swap-off fill-current w-10 h-10`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {
          user ?
          <div className="dropdown dropdown-end cursor-pointer">
            <div tabIndex={0} className="avatar mx-4">
              <div className="w-10 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-1">
                <img alt="P" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="text-lg">{user.displayName || user.email}</p>
              </li>
              <li>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => {
                    Logout();
                  }}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
          :
          <Button variant="link" onClick={handleLoginClick} className="mr-4">Login</Button>
        }
      </div>
    </div>
  );
}
