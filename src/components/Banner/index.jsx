import React from "react";
import "./style.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-image">
        <img src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/92a752b4-2f5b-45c7-a451-d84b32ccb0cf.jpg" alt="Banner image" />
      </div>
      <div className="banner-content">
        <h1 className="title font-bold mb-4">Learning that gets you</h1>
        <p className="desc">Skills for your present (and your future). Get started.</p>
        <button className="btn-outline btn-block mt-6">
          <span className="text-nevada">What do you want to learn?</span>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
