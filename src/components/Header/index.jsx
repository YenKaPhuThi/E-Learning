/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./style.css";

import { USER_LOGIN } from "../../util/settings/config";

export default function Header() {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  console.log(userLogin);
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
      return (
        <li key={index}>
          <a className="flex items-center justify-between px-4 py-2" href="#">
            {item.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
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
          <button className="pr-5">
            <i class="fas fa-cart-plus"></i>
          </button>

          {userLogin ? (
            <div className=" dropdown inline-block relative">
              <div className="flex items-center justify-items-center">
                <img
                  className="w-10 h-10 rounded-full ring-2 ring-offset-4 ring-violet-600 ring-offset-coolGray-100"
                  src="https://source.unsplash.com/100x100/?portrait"
                ></img>
                <span className="btn-outline font-bold pl-2 ">
                  {userLogin?.hoTen}
                </span>
              </div>

              <ul className="dropdown-menu right-0 bg-white top-9 absolute hidden text-gray-700 pt-1">
                <li>
                  <NavLink
                    to="/chinhsuathongtin"
                    className="max-w-md p-8 sm:flex sm:space-x-6 bg-coolGray-50 text-coolGray-800 block"
                  >
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                      <img
                        src="https://source.unsplash.com/100x100/?portrait"
                        alt
                        className="object-cover object-center w-full h-full rounded"
                      />
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div>
                        <h2 className="text-2xl font-semibold">
                          {userLogin.hoTen}
                        </h2>
                        <span className="text-sm text-coolGray-600">
                          {userLogin.maLoaiNguoiDung}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            aria-label="Email address"
                            className="w-4 h-4"
                          >
                            <path
                              fill="currentColor"
                              d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                            />
                          </svg>
                          <span className="text-coolGray-600">
                            {userLogin.email}
                          </span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            aria-label="Phonenumber"
                            className="w-4 h-4"
                          >
                            <path
                              fill="currentColor"
                              d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                            />
                          </svg>
                          <span className="text-coolGray-600">
                            {userLogin.soDT}
                          </span>
                        </span>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <>
              {" "}
              <NavLink to="/signin" className="btn-outline font-bold">
                Log in
              </NavLink>
              <NavLink to="/signup" className="btn-dark font-bold">
                Sign up
              </NavLink>
            </>
          )}

          <button className="btn-outline font-bold pl-5 ">
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
