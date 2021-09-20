/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

import { useSelector } from "react-redux";

export default function FeatureByCategory() {
  const courseCategories = useSelector((state) => {
    return state.course.courseCategories;
  });

  const renderCategory = () => {
    return courseCategories?.map((item, index) => {
      return (
        <div key={index} className="flex flex-col">
          <div className="flex flex-col text-sm text-coolGray-600">
            <a href="#">{item.tenDanhMuc}</a>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className="bg-gray-100 feature-topic"
      style={{ backGroundColor: "#f7f9fa" }}
    >
      <div className="p-6 bg-coolGray-100 text-coolGray-800 md:p-12">
        <h2 className="text-2xl font-bold mb-8 md:text-3xl">
          Những chủ đề nổi bật theo danh mục
        </h2>
        <div className="grid grid-cols-2 mx-auto gap-x-3 gap-y-4 md:grid-cols-4 md:gap-y-6">
          {renderCategory()}
        </div>
        <button
          type="button"
          className="px-8 py-3  border font-bold rounded  text-gray-700 mt-8 border-gray-700 hover:bg-gray-100"
        >
          Khám phá các chủ đề khác
        </button>
      </div>
    </div>
  );
}
