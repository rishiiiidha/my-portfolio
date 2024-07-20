import React, { useState, useRef, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { identity } from "../constants/constant";

const navBarLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Achievements", url: "/achievements" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-6 py-6 max-w-2xl mx-auto flex items-center justify-between">
      <NavLink to="/">
        <img
          src={identity.logo}
          alt={"Logo"}
          width={50}
          height={50}
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
      </NavLink>
      <nav className="ml-auto mr-6 sm:m-0">
        <ul className="hidden sm:flex sm:items-center sm:gap-2">
          {navBarLinks.map((link) => (
            <li key={link.url}>
              <NavLink
                className="group px-4 py-2 rounded-lg hover:bg-gray-bg opacity-60 hover:opacity-100 transition-all"
                to={link.url}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="relative sm:hidden" ref={menuRef}>
          <button
            id="link-menu-button"
            className="relative font-medium opacity-60 p-4"
            onClick={toggleMenu}
          >
            Menu <span id="open-indicator">{menuOpen ? "-" : "+"}</span>
          </button>
          <div
            id="link-menu"
            className={`absolute p-2 right-0 bg-black  border-slate-900 rounded-lg w-44 transition-opacity ease-in-out duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } z-40`}
          >
            <ul>
              {navBarLinks.map((link) => (
                <li key={link.url}>
                  <NavLink
                    className="block pl-4 py-3 opacity-100"
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <a
          href={`mailto:${`rishidha04@gmail.com`}`}
          className="block p-2 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Email"
        >
          <MdEmail name="mdi:email" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
