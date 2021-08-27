/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./style.css";
export default function FeatureByCategory() {
  return (
    <div
      className=" min-h-screen:60vh  bg-gray-100 max-w-full py-8 feature-topic xl:pl-24"
      style={{ backGroundColor: "#f7f9fa" }}
    >
      <div className="p-6 bg-coolGray-100 text-coolGray-800 container  ">
        <h2 className="text-3xl font-bold mb-6">Featured topics by category</h2>
        <div className=" grid grid-cols-2 mx-auto gap-x-3 gap-y-8 md:grid-cols-4 ">
          <div className="flex flex-col ">
            <h2 className="text-2xl font-bold">Development</h2>
            <div className="flex flex-col  text-sm text-coolGray-600">
              <a href="#">Python</a>
              <p href="#">30,366,156 students </p>
              <a href="#">Web Developement </a>
              <p href="#">30,366,156 students </p>
              <a href="#">Machine Learning </a>
              <p href="#">30,366,156 students </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Bussiness </h2>
            <div className="flex flex-col text-sm text-coolGray-600">
              <a href="#">Python</a>
              <p href="#">30,366,156 students </p>
              <a href="#">Web Developement </a>
              <p href="#">30,366,156 students </p>
              <a href="#">Machine Learning </a>
              <p href="#">30,366,156 students </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">It & Software</h2>
            <div className="flex flex-col text-sm text-coolGray-600">
              <a href="#">Python</a>
              <p href="#">30,366,156 students </p>
              <a href="#">Web Developement </a>
              <p href="#">30,366,156 students </p>
              <a href="#">Machine Learning </a>
              <p href="#">30,366,156 students </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Design</h2>
            <div className="flex flex-col text-sm text-coolGray-600">
              <a href="#">Python</a>
              <p href="#">30,366,156 students </p>
              <a href="#">Web Developement </a>
              <p href="#">30,366,156 students </p>
              <a href="#">Machine Learning </a>
              <p href="#">30,366,156 students </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="px-8 py-3  border font-bold rounded  text-gray-700 mt-8 border-gray-700 hover:bg-gray-100"
        >
          Explore more topics
        </button>
      </div>
    </div>
  );
}
