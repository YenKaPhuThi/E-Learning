import React from "react";
import "./style.css";

export default function Banner() {
  return (
    <div className="banner relative">
      <div className="banner-image">
        <img src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/92a752b4-2f5b-45c7-a451-d84b32ccb0cf.jpg" alt="Banner image" />
      </div>
      <div className="box-shadow bg-white py-4 px-6 md:py-6 md:w-96 md-absolute-x-center">
        <h1 className="title font-bold mb-2">Learning that gets you</h1>
        <p className="md:text-lg">Skills for your present (and your future). Get started.</p>
        <button className="flex items-center justify-between p-3 w-full border border-black mt-4">
          <span className="text-nevada">What do you want to learn?</span>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
