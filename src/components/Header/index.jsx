import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const courseCategories = useSelector((state) => {
    return state.course.courseCategories;
  });

  const handleShowNavbar = () => {
    setShowNavbar(true);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  const renderCourseCategories = () => {
    return courseCategories?.map((item, index) => {
      console.log(item);
      return (
        <li key={index}>
          <a className="flex items-center justify-between px-4 py-2" href="#">
            {item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
            <i className="fas fa-chevron-right fa-xs p-1 ml-3"></i>
          </a>
        </li>
      );
    });
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
            <input className="form-control" placeholder="Search for anything" />
          </form>
          <a href="#" className="link">
            Udemy Business
          </a>
          <a href="#" className="p-3 text-sm hover-text-primary">
            Teach on Udemy
          </a>
          <button>
            <i class="fas fa-cart-plus"></i>
          </button>
          <NavLink to="/signin" className="btn-outline font-bold">
            Log in
          </NavLink>
          <NavLink to="/signup" className="btn-dark font-bold">
            Sign up
          </NavLink>
          <button className="btn-outline font-bold">
            <i class="fas fa-globe-asia"></i>
          </button>
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
            <ul>{renderCourseCategories()}</ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
