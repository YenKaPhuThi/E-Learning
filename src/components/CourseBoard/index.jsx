
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

  const introList = [
    {
      maDanhMuc: "BackEnd",
      gioiThieu: "Phần back end của một trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu. Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được. (Nguồn: topdev.vn)"
    },
    {
      maDanhMuc: "Design",
      gioiThieu: "Thiết kế là việc tạo ra một bản vẽ hoặc quy ước nhằm tạo dựng một đối tượng, một hệ thống hoặc một tương tác giữa người với người có thể đo lường được. Trong một số trường hợp, việc xây dựng, tạo hình trực tiếp một đối tượng cũng được coi là vận dụng tư duy thiết kế. (Nguồn: wikipedia)"
    },
    {
      maDanhMuc: "DiDong",
      gioiThieu: "Lập trình viên mobile là những chuyên viên lập trình về công nghệ di động.  Ngành sử dụng ngôn ngữ lập trình (Java, C#,..) để viết, sáng tạo và phát triển các phần mềm nhằm gia tăng tiện ích cho thiết bị di động. (Nguồn: topcv.vn)"
    },
    {
      maDanhMuc: "FrontEnd",
      gioiThieu: "Phần front-end của một trang web là phần tương tác với người dùng. Tất cả mọi thứ bạn nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt, là một sự kết hợp của HTML, CSS, và JavaScript được điều khiển bởi trình duyệt máy tính của bạn. (Nguồn: topdev.vn)"
    },
    {
      maDanhMuc: "FullStack",
      gioiThieu: "Khái niệm lập trình viên full stack là vai trò đã được phổ biến bởi bộ phận kỹ thuật của Facebook. Ý tưởng là một lập trình viên full stack có thể làm việc liên chức năng trên “stack” công nghệ, tức là cả front end lẫn back end. (Nguồn: topdev.vn)"
    },
    {
      maDanhMuc: "TuDuy",
      gioiThieu: "Thế nhưng hiểu một cách đơn giản nhất về tư duy lập trình thì đó chính là cách mà các lập trình viên sử dụng đầu óc, chất xám của mình để tư duy và giải quyết vấn đề, phân tích vấn đề, biến vấn đề lớn thành những vấn đề nhỏ. Để từ đó họ đưa ra được cách giải quyết tốt nhất. (Nguồn: timviec365.vn)"
    },
  ]

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

  // hàm thêm phần giới thiệu cho mỗi môn học
  const addIntroInCategoriList = useCallback(() => {
    const list = [...courseCategoriList];
    return list.map((item) => {
      const intro = introList.find((introItem) => {
        if (introItem.maDanhMuc === item.maDanhMuc) {
          return introItem;
        }
      })
      return item = { ...item, gioiThieu: intro.gioiThieu };
    })
  }, [courseCategoriList])
  const addedIntroCategoriList = addIntroInCategoriList();

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

  const getCoursesByChosenSubject = useCallback(() => {
    const list = [];
    courseList.find((item) => {
      if (item.danhMucKhoaHoc.maDanhMucKhoahoc === activeSubject) {
        list.push(item);
      }
    })
    // console.log("list", list)
    return list;
  }, [courseList, activeSubject])

  // HÀM RENDER CÁC COMPONENT NHỎ THÀNH PHẦN--------------------
  const renderDropdownCourse = (activeSubject, subject) => {
    // console.log("renderDropdownCourse", subject)
    if (activeSubject === subject) {
      return (
        <div>
          <Slider {...selectedCourseSliderSetting}>
            {renderCourseByList(getCoursesByChosenSubject())}
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
      return list.map((item, index) => {
        const { maDanhMuc, tenDanhMuc } = item;
        return (
          <div
            key={index}
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
    const list = [...addedIntroCategoriList];
    return list.map((item, index) => {
      if (item.maDanhMuc === subject) {
        const { tenDanhMuc, gioiThieu } = item;
        // console.log("item", item);
        return (
          <React.Fragment key={index}>
            <div>
              <h3 className="font-bold text-2xl">{tenDanhMuc}</h3>
              <p className="subjectIntro">{gioiThieu}</p>
            </div>
            <div className="flex justify-end">
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </React.Fragment>
        )
      }
    })
  }

  // render khóa học theo danh sách truyền vào
  const renderCourseByList = (list, isCourseSmallSize) => {
    return list.map((item, index) => {
      return (
        <div key={index}>
          <CourseItem data={item} index={index} isSmallSize={isCourseSmallSize}></CourseItem>
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

        <div className="allCourse">
          <Slider ref={allSlideRef} {...allCourseSliderSetting}>
            {renderCourseByList(courseList, isCourseSmallSize)}
          </Slider>
        </div>
      </div>
    )
  }
  //--------------------***--------------------


  // HÀM RENDER COMPONENT THEO KÍCH THƯỚC MÀN HÌNH --------------------
  const renderSmallPhoneScreen = useCallback(
    () => {
      const list = [...courseCategoriList];
      return (
        <div>
          {
            list.map((item, index) => {
              const { maDanhMuc, tenDanhMuc } = item;
              return (
                <React.Fragment key={index}>
                  <div onClick={() => {
                    setActiveSubject(maDanhMuc);
                    handleClickedSubject(maDanhMuc);
                  }} className="pointer subjectItemBorder font-bold items-center inline-flex justify-between">
                    <p>{tenDanhMuc}</p>
                    <i class="fas fa-chevron-down"></i>
                  </div>
                  {renderDropdownCourse(activeSubject, maDanhMuc)}
                </React.Fragment>
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

  const renderMediumPhoneScreen = () => {
    return (
      <div>
        <div>
          {renderSubjectListWithRes()}
        </div>
        <div className=" mt-5 p-7 border-2">
          {<Slider ref={selectedSlideRef} {...selectedCourseSliderSetting}>
            {renderCourseByList(getCoursesByChosenSubject())}
          </Slider>}
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
            {renderCourseByList(getCoursesByChosenSubject())}
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
        <div className="selectedCourseListBorder">
          {(width >= breakpoint768) ? renderIntroBySubject(activeSubject) : <></>}
          {<Slider ref={selectedSlideRef} {...selectedCourseSliderSetting}>
            {renderCourseByList(getCoursesByChosenSubject())}
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
            (width >= breakpoint600) ? renderMediumPhoneScreen() : renderSmallPhoneScreen()
      }
    </div >
  )

}

export default CourseBoard;
