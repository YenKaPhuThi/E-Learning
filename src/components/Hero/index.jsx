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
                Trở thành người hướng dẫn
              </h1>

              <p class="text-left pt-3 text-black text-xl xl:w-4/5 mb-8 leading-relaxed">
                {/* Instructors from around the world teach millions of students on
                Udemy. We provide the tools and skills to teach what you love. */}
                Hướng dẫn hàng triệu học viên Udemy từ khắp thế giới.
                Chúng tôi cung cấp các công cụ và kỹ năng để dạy những gì bạn yêu thích.
              </p>

              <div className="flex justify-center w-full md:w-max ">
                <button className="block text-white font-bold w-full bg-black border-0 py-4 md:px-5  focus:outline-none  text-base xl:w-full xl:block">
                  Udemy Bussiness
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
              {/* Trusted by companies of all sizes */}
              Được tin cậy bởi đa dạng các công ty
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
              <h1 className="text-left font-serif sm:text-4xl text-2xl font-semibold text-black">
                {/* Transform your life through education */}
                Thay đổi cuộc đời bạn qua giáo dục
              </h1>
              <p className="text-left mt-1 text-black text-xl w-4/5 mb-8 leading-relaxed">
                {/* Learners around the world are launching new careers, advancing
                in their fields, and enriching their lives. */}
                Học viên khắp thế giới đang khởi đầu sự nghiệp,
                thăng tiến trong sự nghiệp
                và cải thiện cuộc đời.
              </p>
              <div className="flex justify-center w-full md:w-max ">
                <button className="block text-white font-bold w-full bg-black border-0 py-4 md:px-5  focus:outline-none  text-base xl:w-full xl:block">
                  Tìm hiểu ngay
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
