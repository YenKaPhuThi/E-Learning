
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CourseItem from "../CourseItem";
import Slider from "react-slick";

import "./styles.css";

const CourseBoard = () => {

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk

  // các kích thước srceen để chỉnh responsive,
  // định nghĩa width độ lớn màn hình sau khi reload
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint600 = 600;
  const breakpoint768 = 768;
  const breakpoint1024 = 1024;
  const breakpoint1400 = 1400;

  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const courseCategoriList = useSelector((state) => {
    return state.course.courseCategories;
  });

  // dùng xác định slider nào dùng button nào
  const selectedSlideRef = useRef();
  const allSlideRef = useRef();

  // flag xác định kích thước item khóa học
  const isCourseSmallSize = true;

  // Công tắc xác định trạng thái các môn học
  const [is_BackEndSubject_Clicked, set_BackEndSubject_Clicked] = useState(true);
  const [is_DesignSubject_Clicked, set_DesignSubject_Clicked] = useState(false);
  const [is_DiDongSubject_Clicked, set_DiDongSubject_Clicked] = useState(false);

  const [is_FrontEndSubject_Clicked, set_FrontEndSubject_Clicked] = useState(false);
  const [is_FullStackSubject_Clicked, set_FullStackSubject_Clicked] = useState(false);
  const [is_TuDuySubject_Clicked, set_TuDuySubject_Clicked] = useState(false);

  const S = [
    {
      "maDanhMuc": "BackEnd",
      "tenDanhMuc": "Lập trình Backend"
    },
    {
      "maDanhMuc": "Design",
      "tenDanhMuc": "Thiết kế Web"
    },
    {
      "maDanhMuc": "DiDong",
      "tenDanhMuc": "Lập trình di động"
    },
    {
      "maDanhMuc": "FrontEnd",
      "tenDanhMuc": "Lập trình Front end"
    },
    {
      "maDanhMuc": "FullStack",
      "tenDanhMuc": "Lập trình Full Stack"
    },
    {
      "maDanhMuc": "TuDuy",
      "tenDanhMuc": "Tư duy lập trình"
    }
  ]

  // {
  //   "maDanhMuc": "BackEnd",
  //   "tenDanhMuc": "Lập trình Backend"
  //   "gioiThieu"
  // },

  // môn học mặc định được chọn
  let [activeSubject, setActiveSubject] = useState("BackEnd");

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // SET UP LOGIC BUTTON CHỌN KHÓA HỌC--------------------
  const slideNextCourse = useCallback(
    (course) => {
      // console.log("slideNextCourse");
      if (course === "selectCourse") {
        selectedSlideRef.current.slickNext();
      } else {
        allSlideRef.current.slickNext();
      }

    }
  )

  const slidePrevCourse = useCallback(
    (course) => {
      // console.log("slidePrevCourse");
      if (course === "selectCourse") {
        selectedSlideRef.current.slickPrev();
      } else {
        allSlideRef.current.slickPrev();
      }
    }
  )
  //--------------------***--------------------


  // SET UP THUỘC TÍNH CÁC SLIDER--------------------

  // slider khóa học được chọn
  const selectedCourseSliderSetting = {
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,

        }
      },
    ],
  };

  // slider khóa học ngẫu nhiên
  const allCourseSliderSetting = {
    slidesToScroll: 1,
    slidesToShow: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          rows: 3,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 3,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
    ]
  }

  // slider môn học
  const subjectSliderSetting = {
    // className: "slider variable-width",
    slidesToShow: 4,
    slidesToScroll: 2,
    variableWidth: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  }
  //--------------------***--------------------


  // hàm set trạng thái môn được click
  const handleClickedSubject = (subject) => {
    // console.log("handleClickedSubject")
    switch (subject) {
      case "BackEnd":
        return set_BackEndSubject_Clicked(!is_BackEndSubject_Clicked);
      case "Design":
        return set_DesignSubject_Clicked(!is_DesignSubject_Clicked);
      case "DiDong":
        return set_DiDongSubject_Clicked(!is_DiDongSubject_Clicked);
      case "FrontEnd":
        return set_FrontEndSubject_Clicked(!is_FrontEndSubject_Clicked);
      case "FullStack":
        return set_FullStackSubject_Clicked(!is_FullStackSubject_Clicked);
      case "TuDuy":
        return set_TuDuySubject_Clicked(!is_TuDuySubject_Clicked);
      default:
        return;
    }
  }

  // hàm chuyển tất cả môn về trạng thái chưa được chọn
  const setInactiveSubject = () => {
    set_BackEndSubject_Clicked(false);
    set_DesignSubject_Clicked(false);
    set_DiDongSubject_Clicked(false);

    set_FrontEndSubject_Clicked(false);
    set_FullStackSubject_Clicked(false);
    set_TuDuySubject_Clicked(false);
  }

  // hàm thiết lập button chọn khóa học
  const setSlideButton = (course) => {
    return (
      <div className="flex mr-4">
        <button className="px-7 text-3xl" onClick={() => slidePrevCourse(course)}>
          <i class="text-3xl fas fa-chevron-left"></i>
        </button>
        <button className="px-7 text-3xl" onClick={() => slideNextCourse(course)}>
          <i class="text-3xl fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  // HÀM RENDER CÁC COMPONENT NHỎ THÀNH PHẦN--------------------
  const renderDropdownCourse = (activeSubject, subject) => {
    // console.log("renderDropdownCourse", subject)
    if (activeSubject === subject) {
      return (
        <div>
          <Slider {...selectedCourseSliderSetting}>
            {renderCourseByList(courseList)}
          </Slider>
        </div>
      )
    } else {
      return (<></>)
    }
  }

  // render các item tên các môn học 
  const renderSubjectListItem = useCallback(
    (activeSubject) => {
      const list = [...courseCategoriList];
      return list.map((item) => {
        const { maDanhMuc, tenDanhMuc } = item;
        return (
          <div
            onClick={
              () => {
                setActiveSubject(maDanhMuc);
                setInactiveSubject();
                handleClickedSubject(maDanhMuc);
              }}
            className={`${(activeSubject === maDanhMuc) ? "active" : ""} text-xl mr-3 cursor-pointer subjectItem`}
          >{tenDanhMuc}</div>
        )
      })
    }, [courseCategoriList]
  )

  // render các item tên các môn học resopnsive
  const renderSubjectListWithRes = () => {
    return (
      <div >
        <div >
          {(width < breakpoint1024) ? (
            <Slider {...subjectSliderSetting}>
              {renderSubjectListItem(activeSubject)}
            </Slider>
          ) : (
            <div className="flex">
              {renderSubjectListItem(activeSubject)}
            </div>
          )}
        </div>
      </div>
    )
  }

  // render giới thiệu theo môn học
  const renderIntroBySubject = (subject) => {
    const list = [...courseCategoriList];
    return list.map((item) => {
      if (item.maDanhMuc === subject) {
        const { tenDanhMuc, gioiThieu } = item;
        return (
          <>
            <div>
              <h3 className="font-bold text-2xl">{tenDanhMuc}</h3>
              <p className="subjectIntro">{gioiThieu}</p>
            </div>
            <div className="flex justify-end">
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </>
        )
      }
    })
  }

  // render khóa học theo danh sách truyền vào
  const renderCourseByList = (list, isCourseSmallSize) => {
    return list.map((item, index) => {
      return (
        <div key={index}>
          <CourseItem data={item} isSmallSize={isCourseSmallSize}></CourseItem>
        </div >
      );
    })
  }

  // render slider các khóa học ngẫu nhiên
  const renderAllCourse = (isCourseSmallSize) => {
    return (
      <div className="my-12">
        <h3 className="font-bold text-2xl text-lg-4xl flex justify-between">
          Khóa học nổi bật
          <div>
            {(width >= breakpoint1024) ? setSlideButton("allCourse") : (<></>)}
          </div>
        </h3>

        <div>
          <Slider ref={allSlideRef} {...allCourseSliderSetting}>
            {renderCourseByList(courseList, isCourseSmallSize)}
          </Slider>
        </div>
      </div>
    )
  }
  //--------------------***--------------------


  // HÀM RENDER COMPONENT THEO KÍCH THƯỚC MÀN HÌNH --------------------
  const _renderSmallPhoneScreen = useCallback(
    () => {
      const list = [...courseCategoriList];
      return (
        <div>
          {
            list.map((item) => {
              const { maDanhMuc, tenDanhMuc } = item;
              return (
                <>
                  <div onClick={() => {
                    setActiveSubject(maDanhMuc);
                    handleClickedSubject(maDanhMuc);
                  }} className="pointer subjectItemBorder font-bold items-center inline-flex justify-between">
                    <p>{tenDanhMuc}</p>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                  {renderDropdownCourse(activeSubject, maDanhMuc)}
                </>
              )
            })
          }
          < div >
            {renderAllCourse(isCourseSmallSize)}
          </div >
        </div>
      )

    }
  )

  const renderSmallPhoneScreen = () => {
    return (
      <div>
        <div className="subjectBoard">

          <div onClick={() => handleClickedSubject("Python")} className="pointer subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Python</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_BackEndSubject_Clicked)}

          <div onClick={() => handleClickedSubject("Excel")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Excel</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_DesignSubject_Clicked)}

          <div onClick={() => handleClickedSubject("WebDevelopment")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Web Development</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_DiDongSubject_Clicked)}

          <div onClick={() => handleClickedSubject("JavaScript")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>JavaScript</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_FrontEndSubject_Clicked)}

          <div onClick={() => handleClickedSubject("DataScience")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Data Science</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_FullStackSubject_Clicked)}

          <div onClick={() => handleClickedSubject("AWSCertification")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>AWS Certification</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_TuDuySubject_Clicked)}
        </div>

      </div>

    );
  }

  const renderMediumPhoneScreen = () => {
    return (
      <div>
        <div>
          {renderSubjectListWithRes()}
        </div>
        <div>
          {renderAllCourse()}
        </div>
      </div>
    );
  }

  const renderTabletScreen = () => {
    return (
      <div>
        <div>
          <h3 className="font-bold font-serif text-3xl">Đa dạng khóa học</h3>
          <p className="text-2xl">Chọn lọc từ 155.000 video khóa học trực tuyến và được cập nhập hàng tháng</p>
        </div>
        <div className="mt-5">
          {renderSubjectListWithRes()}
        </div>
        <div className=" mt-5 p-7 border-2">
          {(width >= breakpoint768) ? renderIntroBySubject(activeSubject) : <></>}
          {<Slider ref={selectedSlideRef} {...selectedCourseSliderSetting}>
            {renderCourseByList(courseList)}
          </Slider>}
        </div>
        <div>
          {renderAllCourse()}
        </div>
      </div>
    );
  }

  const renderLaptopScreen = () => {
    return (
      <div>
        <div>
          <h3 className="font-bold font-serif text-3xl">Đa dạng khóa học</h3>
          <p className="text-2xl">Chọn lọc từ 155.000 video khóa học trực tuyến và được cập nhập hàng tháng</p>
        </div>
        <div className="mt-5">
          {renderSubjectListWithRes()}
        </div>
        <div className=" mt-5 p-7 border-2">
          {(width >= breakpoint768) ? renderIntroBySubject(activeSubject) : <></>}
          {<Slider ref={selectedSlideRef} {...selectedCourseSliderSetting}>
            {renderCourseByList(courseList)}
          </Slider>}
        </div>
        <div>
          {renderAllCourse()}
        </div>
      </div>
    );
  }
  //--------------------***--------------------

  return (
    <div className={`${width > breakpoint1400 ? 'px-48' : 'px-6 mt-10'}`}>
      {
        (width >= breakpoint1024) ? renderLaptopScreen() :
          (width >= breakpoint768) ? renderTabletScreen() :
            (width >= breakpoint600) ? renderMediumPhoneScreen() : _renderSmallPhoneScreen()
      }
    </div >
  )

}

export default CourseBoard;
