/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";

export default function Hero() {
  return (
    <>
      <div className="" style={{ width: "90%", marginLeft: "5%" }}>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 xl:flex-row flex-col items-center">
            <div
              className=" w-full mb-8 xl:w-1/2"
              style={{ textAlign: "-webkit-center" }}
            >
              <img
                className="object-cover rounded"
                alt="hero"
                src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              />
            </div>
            <div className="lg:flex-grow w-full xl:w-1/2 lg:pr-12 md:pr-12 flex flex-col  text-center xl:text-left mb-16 md:mb-0 items-center xl:items-start md:content-between ">
              <h1 className="font-serif sm:text-4xl text-2xl  font-semibold text-black">
                Become a instructor
              </h1>

              <p class=" text-black text-xl xl:w-4/5 mb-8 leading-relaxed">
                Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love.
              </p>

              <div className="flex justify-center w-full md:w-max ">
                <button className="block text-white font-bold w-full bg-black border-0 py-4 md:px-5  focus:outline-none  text-base xl:w-full xl:block">
                  Get Udemy Bussiness
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <section className="p-4 bg-coolGray-100 text-coolGray-800 bg-gray-100 w-max-full">
          <div className="container p-4 mx-auto text-center">
            <h2 className="font-semibold text-black font-serif sm:text-3xl text-2xl">
              Trusted by companies of all sizes
            </h2>
          </div>
          <div className="container flex flex-wrap justify-center mx-auto text-coolGray-600">
            <div className="logo-item">
              <img
                alt="Apple"
                className="w-full"
                src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Apple"
                className="w-full"
                src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
              />
            </div>
            <div className="logo-item">
              <img
                className="w-full"
                alt="Apple"
                src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Apple"
                className="w-full"
                src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg"
              />
            </div>
            <div className="logo-item">
              <img
                alt="Apple"
                className="w-full"
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
              />
            </div>
          </div>
        </section>
      </div>
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 xl:flex-row flex-col items-center">
            <div
              className=" w-full mb-8 xl:w-1/2"
              style={{ textAlign: "-webkit-center" }}
            >
              <img
                className="object-cover rounded"
                alt="hero"
                src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
              />
            </div>
            <div className="lg:flex-grow w-full xl:w-1/2 lg:pr-12 md:pr-12 flex flex-col  text-center xl:text-left mb-16 md:mb-0 items-center xl:items-start md:content-between ">
              <h1 className="font-serif sm:text-4xl text-2xl font-semibold text-black">
                Transform your life through education
              </h1>
              <p className=" text-black text-xl w-4/5 mb-8 leading-relaxed">
                Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives.
              </p>
              <div className="flex justify-center w-full md:w-max ">
                <button className="block text-white font-bold w-full bg-black border-0 py-4 md:px-5  focus:outline-none  text-base xl:w-full xl:block">
                  Find out now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

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
    </>
  );
}
