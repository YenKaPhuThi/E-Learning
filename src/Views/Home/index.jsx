import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux store
import {
  fetchCourseList,
  fetchCourseCategories,
  registerCourse,
  reverseCourse,
} from "../../Redux/Actions/CourseAction";

// Components
import Hero from "../../Components/Hero";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import TopCateGories from "../../Components/TopCategories";
import FeatureByCategory from "../../Components/FeatureByCategory";

// Util
import { USER_LOGIN } from "../../util/settings/config";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseList());
    dispatch(fetchCourseCategories());
  }, [dispatch]);

  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const handleRegisterCoure = (codeCourse) => {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

    const dataRequest = {
      maKhoaHoc: codeCourse,
      taiKhoan: userLogin.taiKhoan,
    };

    dispatch(registerCourse(dataRequest));
  };

  const hanleReverseCourse = (codeCourse) => {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

    const dataRequest = {
      maKhoaHoc: codeCourse,
      taiKhoan: userLogin.taiKhoan,
    };

    dispatch(reverseCourse(dataRequest));
  };

  const renderCourseList = () => {
    return courseList.map((item, index) => {
      return (
        <div key={index}>
          <div className="card">
            <img
              className="card-img-top"
              src={item.hinhAnh}
              style={{ height: 300 }}
              alt
            />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">Text</p>
            </div>
            <div class="card-footer text-muted">
              <button
                className="p-3 text-white bg-purple-600 rounded-2xl"
                onClick={() => handleRegisterCoure(item.maKhoaHoc)}
              >
                Đăng ký khóa học
              </button>
              <button
                className="p-3 text-white bg-purple-600 rounded-2xl ml-2"
                onClick={() => hanleReverseCourse(item.maKhoaHoc)}
              >
                Hủy khóa học
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="bg-gray-100 p-12">
        <div className="grid grid-cols-2 mx-auto gap-x-6 gap-y-8 md:grid-cols-4">
          {renderCourseList()}
        </div>
      </div>
      <TopCateGories />
      <Hero />
      <FeatureByCategory />
      <Footer />
    </>
  );
}
