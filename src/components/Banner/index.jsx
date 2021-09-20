import React from "react";
import "./style.css";

export default function Banner() {
  return (
    <div className="banner relative">
      <div className="banner-image">
        <img
          src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/92a752b4-2f5b-45c7-a451-d84b32ccb0cf.jpg"
          alt="Banner image"
        />
      </div>
      <div className="box-shadow bg-white py-4 px-6 md:py-6 md:w-96 md-absolute-x-center">
        <h1 className="title font-bold mb-2">Học tập giúp bạn</h1>
        <p className="md:text-lg">
          Kỹ năng cho hiện tại của bạn (và tương lai của bạn). Bắt đầu với chúng
          tôi.
        </p>
      </div>
    </div>
  );
}
