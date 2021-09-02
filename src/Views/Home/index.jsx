import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Redux store
import { fetchCourseCategories } from "../../Store/Actions/course";

// Components
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import TopCateGories from "../../Components/TopCategories";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourseCategories)
  }, [dispatch]);

  return (
    <>
      <Header />
      <Banner />
      <TopCateGories />
      <Footer />
    </>
  );
}
