import React, { useEffect } from "react";

import Layout from "../../HOC/Layout";

import { LIST_COURSES } from "../../Redux/Actions/Types/CourseType";
import { INFO_USER } from "../../Redux/Actions/Types/UserType";

export default function MyLearning() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCourseList());
  //   dispatch(getInforUserAction());
  // }, [dispatch]);
  const courseList = JSON.parse(localStorage.getItem(LIST_COURSES));
  const user = JSON.parse(localStorage.getItem(INFO_USER));
  const { chiTietKhoaHocGhiDanh } = user;

  const listCourses = [].concat(
    chiTietKhoaHocGhiDanh?.map((detail) => {
      return courseList?.filter((item) => {
        return item.maKhoaHoc === detail.maKhoaHoc;
      });
    })
  );

  const courses = [];
  listCourses.forEach((item) => {
    return courses.push(item[0]);
  });

  console.log(courses);

  return (
    <Layout>
      <div className="flex justify-center flex-col md:flex-row  p-6  sm:p-10 bg-gray-50 text-gray-800">
        <div className="">
          <h2 className="text-xl font-semibold">
            {courses?.length} Courses in Carts
          </h2>
          {courses?.map((course) => {
            return (
              <ul className="flex flex-col divide-y divide-gray-300">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full   ">
                    <img
                      className="flex-shrink-0 object-cover mr-5 w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32"
                      src={course.hinhAnh}
                      alt="Polaroid camera"
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 ">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            {course.tenKhoaHoc}
                          </h3>
                          <p className="text-sm text-gray-600">{course.moTa}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            {course.luotXem} Views
                          </p>
                          <p className="text-sm  text-gray-400">
                            {course.ngayTao}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0  "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fillCurrent"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center px-2 py-1  "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fillCurrent"
                          >
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                          </svg>
                          <span>Add to favorites</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>

        <div className="flex items-start flex-col pl-20">
          <div className="space-y-1">
            <div>
              Total amount:
              <p className="font-semibold text-5xl">
                {courses?.reduce((tongLuotXem, item, index) => {
                  return (tongLuotXem += item.luotXem);
                }, 0)}{" "}
                Views
              </p>
            </div>
            <p className="text-sm py-5 text-gray-600">
              Not including taxes and shipping costs
            </p>
          </div>
          <div className=" flex md:flex-col flex-row self-stretch items-center md:self-auto    ">
            <button
              type="button"
              className="w-full py-2 mr-5 md:mr-0 my-5 border rounded-md border-purple-600"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>

            <button
              type="button"
              className="px-6 py-2 border rounded-md  bg-purple-600 text-gray-50 border-purple-600"
            >
              <span className="sr-only sm:not-sr-only ">Continue to </span>
              Checkout
            </button>
          </div>
        </div>
      </div>
      );
    </Layout>
  );
}
