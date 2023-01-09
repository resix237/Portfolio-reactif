import React, { useState } from "react";
import logo from "./../assets/img/logo3.png";
import menu from "./../assets/img/menu.png";
import close from "./../assets/img/close.png";
const NavBar = () => {
  const [stateCollapse, setStateCollapse] = useState(false);
  return (
    <nav className=" fixed-top relative w-full flex flex-wrap items-center justify-between  bg-violetP text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between lg:px-6 pt-3">
        <a className="text-xl text-white pr-2 mx-3  font-semibold" href="!#">
          <img src={logo} className="h-8" alt="Resix237 logo" />
        </a>
        <button
          className="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline  bg-transparent focus:outline-none focus:ring-0 focus:shadow-none mx-2 focus:no-underline"
          type="button"
          onClick={() => setStateCollapse(!stateCollapse)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {!stateCollapse ? (
            <img src={menu} className="w-12 h-12" alt="menu" />
          ) : (
            <img src={close} className="w-12 h-12" alt="menu" />
          )}
        </button>
        <div
          className="collapse navbar-collapse flex-grow items-center bg-white lg:bg-transparent"
          id="navbarSupportedContent1"
        >
          <ul className="navbar-nav flex  text-center text-lg font-roboto flex-col pl-0 list-style-none items-center place-items-center mr-auto text-violetP lg:text-white">
            <li className="nav-item p-2 lg:p-0 border-b lg:border-b-0 w-1/4 lg:w-auto border-violetP">
              <a className="nav-link " href="!#">
                Acceuil
              </a>
            </li>
            <li className="nav-item p-2 lg:p-0 border-b lg:border-b-0 w-1/4 lg:w-auto border-violetP">
              <a className="nav-link   p-0" href="!#">
                Biographie
              </a>
            </li>
            <li className="nav-item p-2 lg:p-0 border-b lg:border-b-0 w-1/4 lg:w-auto border-violetP">
              <a className="nav-link  p-0" href="!#">
                Projects
              </a>
            </li>
            <li className="nav-item p-2 lg:p-0 border-b lg:border-b-0 w-1/4 lg:w-auto border-violetP">
              <a className="nav-link p-0" href="!#">
                Blog
              </a>
            </li>
            <li className="nav-item p-2 lg:p-0 border-b lg:border-b-0 w-1/4 lg:w-auto border-violetP">
              <a className="nav-link p-0" href="!#">
                CV
              </a>
            </li>
            <li className="nav-item p-2 lg:p-0  my-3 ">
              <a
                className="nav-link py-1 px-5 shadow-md lg:shadow-sm shadow-violet-300 rounded-full bg-violetP lg:bg-white lg:text-violetP text-white"
                href="!#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
