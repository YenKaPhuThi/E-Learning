import React, { useState } from "react";
import cls from "classnames";
import "./style.css";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <header className="relative box-shadow z-10">
      <nav className="p-1 md:flex md:items-center md:justify-between md:px-6 md:py-3">
        <div className="flex justify-between items-center">
          <button
            className="p-3 md:hidden"
            onClick={() => {
              handleShowNavbar();
            }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a href="/" className="md:mr-2">
            <img
              className="h-7 md:h-9"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy Logo"
            />
          </a>
          <div className="md:hidden">
            <button className="p-3">
              <i className="fas fa-search"></i>
            </button>
            <button className="relative p-3">
              <i class="fas fa-cart-plus"></i>
              <span class="absolute -right-1 top-0 text-xs bg-primary text-white font-bold py-1 px-2 rounded-full">
                3
              </span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:space-x-2">
          <a href="#" className="p-3 text-sm hover-text-primary">
            Categories
          </a>
          <form action="/" className="flex flex-1 input-group">
            <button className="p-3">
              <i className="fas fa-search"></i>
            </button>
            <input
              className="bg-transparent w-full text-sm outline-none pl-1 pr-4"
              placeholder="Search for anything"
            />
          </form>
          <a href="#" className="p-3 text-sm hover-text-primary">
            Udemy Business
          </a>
          <a href="#" className="p-3 text-sm hover-text-primary">
            Teach on Udemy
          </a>
          <a href="#" className="p-3 text-sm hover-text-primary">
            <i className="fas fa-cart-plus"></i>
          </a>
          <a
            href="/login"
            className="p-3 bg-white border border-black font-bold text-sm hover-bg-gray"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="p-3 bg-black border border-black text-white font-bold text-sm"
          >
            Sign up
          </a>
          <a href="#" className="p-3 border border-black font-bold text-sm hover-bg-gray">
            <i className="fas fa-globe-asia"></i>
          </a>
        </div>
      </nav>
      <nav
        className={`navbar-menu relative z-10 ${showNavbar ? "" : "hidden"}`}
      >
        <button
          className="absolute left-72 -top-14 bg-white w-12 h-12 m-4 z-10 rounded-full"
          onClick={() => {
            handleCloseNavbar();
          }}
        >
          <i className="fas fa-times fa-1x"></i>
        </button>
        <div className="navbar-backdrop fixed inset-0 bg-black opacity-50" />
        <div className="fixed top-0 left-0 bottom-0 flex flex-col md:w-72 max-w-sm bg-white border-r overflow-y-auto">
          <ul className="py-2 border-b border-gray-300">
            <li>
              <a
                href="/login"
                className="flex items-center justify-between px-4 py-2 text-primary"
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="flex items-center justify-between px-4 py-2 text-primary"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div>
            <h5 className="font-bold text-gray text-sm px-4 pt-4">
              Most popular
            </h5>
            <ul>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Web Development
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Mobile Development
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Game Development
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Entrepreneurship
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Business Analytics & Intelligence
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Digital Marketing
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Graphic Design & Illustration
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  IT Certifications
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  Personal Transformation
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-between px-4 py-2"
                  href="#"
                >
                  All categories
                  <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
