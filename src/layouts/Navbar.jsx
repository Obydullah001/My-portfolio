import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#about" className="hover:text-pink-500">About</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-pink-500">Skills</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-pink-500">Projects</a>
      </li>
      <li className="block lg:hidden">
        <a href="#contact" className="hover:text-pink-500">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-6 lg:w-full mx-auto">
      {/* Logo Section */}
      <div className="navbar-start  lg:navbar-start">
        <h2 className="flex items-center gap-1 font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          <span className="text-xl lg:text-2xl">Obydullah</span>
          <span className="text-xl lg:text-2xl text-white">&lt;/&gt;</span>
        </h2>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end justify-end -mr-70 lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Contact Button */}
      <div className="navbar-end">
        <a href="#contact">
          <button className="btn btn-primary hidden lg:block">Contact Me</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;