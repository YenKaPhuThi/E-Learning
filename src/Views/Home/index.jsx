import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux store
import { fetchCourseCategories } from "../../Redux/Actions/CourseAction";

// Components
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import TopCateGories from "../../Components/TopCategories";
import Hero from "../../Components/Hero";
import FeatureByCategory from "../../Components/FeatureByCategory";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Banner />
      <TopCateGories />
      <Hero />
      <FeatureByCategory />
      <Footer />
    </>
  );
}
