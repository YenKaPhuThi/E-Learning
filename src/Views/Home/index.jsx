import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

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
import CourseBoard from "../../Components/CourseBoard";

// Util
import { USER_LOGIN, CODE_GROUP } from "../../util/settings/config";
import { getInforUserAction } from "../../Redux/Actions/UserAction";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseList());
    dispatch(fetchCourseCategories());
    dispatch(getInforUserAction());
  }, [dispatch]);

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

  return (
    <>
      <Header />
      <Banner />
      <CourseBoard></CourseBoard>
      <TopCateGories />
      <Hero />
      <FeatureByCategory />
      <Footer />
    </>
  );
}
