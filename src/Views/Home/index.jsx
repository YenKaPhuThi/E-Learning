import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux store
import {
  fetchCourseList,
  fetchCourseCategories
} from "../../Redux/Actions/CourseAction";
import { getInforUserAction } from "../../Redux/Actions/UserAction";

// Components
import Hero from "../../Components/Hero";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import TopCateGories from "../../Components/TopCategories";
import FeatureByCategory from "../../Components/FeatureByCategory";
import CourseBoard from "../../Components/CourseBoard";
import Loading from "../../Components/Loading";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseList());
    dispatch(fetchCourseCategories());
    dispatch(getInforUserAction());
  }, [dispatch]);

  return (
    <>
      <Loading />
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
