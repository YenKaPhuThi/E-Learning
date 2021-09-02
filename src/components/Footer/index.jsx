/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

export default function Footer() {
  return (
    <footer className=" body-font bg-black">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap  text-left md:text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 text-left w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-gray-800">Udemy Business</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Teach on Udemy</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Get the app</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">About us</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Contact us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full md:text-left px-4">
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-gray-800">Careers</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Help and Support</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Affiliate</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 text-left w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a className=" hover:text-gray-800">Terms</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Private Policy</a>
              </li>
              <li>
                <a className=" hover:text-gray-800">Site App</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black md:flex md:justify-between px-10 ">
        <div className="  flex  sm:flex-row flex-col">
          <img
            className="h-9 w-24  "
            style={{ display: "block" }}
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          />
        </div>
        <div className="">
          <p className="text-white text-sm">© 2021 Udemy, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
