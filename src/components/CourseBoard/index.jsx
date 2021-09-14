
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CourseItem from "../CourseItem";
import Slider from "react-slick";

import "./styles.css";

const CourseBoard = () => {

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

  // dùng xác định slider nào dùng button nào
  const selectedSlideRef = useRef();
  const allSlideRef = useRef();

  // flag xác định kích thước item khóa học
  const isCourseSmallSize = true;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // Công tắc xác định trạng thái các môn học
  const [is_PythonSubject_Clicked, set_PythonSubject_Clicked] = useState(true);
  const [is_ExcelSubject_Clicked, set_ExcelSubject_Clicked] = useState(false);
  const [is_WebDevSubject_Clicked, set_WebDevSubject_Clicked] = useState(false);
  const [is_JavaScriptSubject_Clicked, set_JavaScriptSubject_Clicked] = useState(false);
  const [is_DataScienceSubject_Clicked, set_DataScienceSubject_Clicked] = useState(false);
  const [is_AWSSubject_Clicked, set_AWSSubject_Clicked] = useState(false);
  const [is_DrawingSubject_Clicked, set_DrawingSubject_Clicked] = useState(false);

  // môn học mặc định được chọn
  let [activeSubject, setActiveSubject] = useState("Python");

  // SET UP LOGIC BUTTON CHỌN KHÓA HỌC--------------------
  const slideNextCourse = (course) => {
    if (course === "selectCourse") {
      selectedSlideRef.current.slickNext();
    } else {
      allSlideRef.current.slickNext();
    }

  }

  const slidePrevCourse = (course) => {
    if (course === "selectCourse") {
      selectedSlideRef.current.slickPrev();
    } else {
      allSlideRef.current.slickPrev();
    }
  }
  //--------------------***--------------------


  // SET UP THUỘC TÍNH CÁC SLIDER--------------------

  // slider khóa học được chọn
  const selectedCourseSliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
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
          infinite: true,
        }
      },
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        }
      },
    ],
  };

  // slider khóa học ngẫu nhiên
  const allCourseSliderSetting = {
    slidesToScroll: 1,
    slidesToShow: 1.2,
    initialSlide: 0,
    infinite: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.4,
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
          slidesToShow: 1.5,
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
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 2,
    variableWidth: true,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     setting: {
    //       slidesToShow: 0,
    //       slidesToScroll: 0,
    //     }
    //   }
    // ]
  }
  //--------------------***--------------------


  // hàm thả xuống, kéo lên dropdown các khóa học theo môn được chọn
  const handleDropDownCourses = (subject) => {
    // console.log("handleDropDownCourses")
    switch (subject) {
      case "Python":
        set_PythonSubject_Clicked(!is_PythonSubject_Clicked);
        break;
      case "Excel":
        set_ExcelSubject_Clicked(!is_ExcelSubject_Clicked);
        break;
      case "WebDevelopment":
        set_WebDevSubject_Clicked(!is_WebDevSubject_Clicked)
        break;
      case "JavaScript":
        set_JavaScriptSubject_Clicked(!is_JavaScriptSubject_Clicked)
        break;
      case "DataScience":
        set_DataScienceSubject_Clicked(!is_DataScienceSubject_Clicked)
        break;
      case "AWSCertification":
        set_AWSSubject_Clicked(!is_AWSSubject_Clicked)
        break;
      case "Drawing":
        set_DrawingSubject_Clicked(!is_DrawingSubject_Clicked)
        break;
      default:
        return;
    }
  }

  // hàm xác định môn học được chọn
  const handleActiveCourse = (subject) => {
    setActiveSubject(subject);
  }

  // hàm chuyển tất cả môn về trạng thái chưa được chọn
  const setInactiveSubject = () => {
    set_PythonSubject_Clicked(false);
    set_ExcelSubject_Clicked(false);
    set_WebDevSubject_Clicked(false);
    set_JavaScriptSubject_Clicked(false);
    set_DataScienceSubject_Clicked(false);
    set_AWSSubject_Clicked(false);
    set_DrawingSubject_Clicked(false);
  }

  // hàm thiết lập button chọn khóa học
  const setSlideButton = (course) => {
    return (
      <div className="flex mr-4">
        <button className="px-7 text-3xl" onClick={() => slidePrevCourse(course)}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <button className="px-7 text-3xl" onClick={() => slideNextCourse(course)}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  // HÀM RENDER CÁC COMPONENT NHỎ THÀNH PHẦN--------------------

  // render giới thiệu môn học, slider các khóa học
  const renderSubjectSliderContent = (activeSubject, sliderSetting) => {
    return (
      <div>
        <>
          {(width >= breakpoint768) ? renderSubjecIntro(activeSubject) : <></>}
        </>

        <Slider ref={selectedSlideRef} {...sliderSetting}>
          {renderCourseList()}

        </Slider>

      </div>
    );
  }

  // render UI môn học được chọn
  const renderEachSubjectContent = useCallback(
    (activeSubject) => {
      // console.log("renderEachSubjectContent", activeSubject);
      switch (activeSubject) {
        case "Python":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "Excel":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "WebDevelopment":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "JavaScript":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "DataScience":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "AWSCertification":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
        case "Drawing":
          return (
            <div>
              {renderSubjectSliderContent(activeSubject, selectedCourseSliderSetting)}
            </div>
          );
      }
    }, [activeSubject]
  )

  // render dropdown slider các khóa học được chọn
  const renderDropdownCourse = (isSubjectClicked) => {
    return (
      <>{
        isSubjectClicked ? (
          <div className="block">
            <Slider {...selectedCourseSliderSetting}>
              <div>
                <CourseItem></CourseItem>
              </div>

              <div>
                <CourseItem></CourseItem>
              </div>

              <div>
                <CourseItem></CourseItem>
              </div>
            </Slider>
          </div>
        ) : (<></>)
      }
      </>
    )
  }

  // render các item tên các môn học 
  const renderSubjectListItem = () => {
    return (
      <div className="flex">
        <div
          onClick={() => { handleActiveCourse("Python"); setInactiveSubject(); set_PythonSubject_Clicked(!is_PythonSubject_Clicked) }}
          className={`${is_PythonSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}>Python</div>

        <div
          onClick={() => { handleActiveCourse("Excel"); setInactiveSubject(); set_ExcelSubject_Clicked(!is_ExcelSubject_Clicked) }}
          className={`${is_ExcelSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >Excel</div>

        <div
          onClick={() => { handleActiveCourse("WebDevelopment"); setInactiveSubject(); set_WebDevSubject_Clicked(!is_WebDevSubject_Clicked) }}
          className={`${is_WebDevSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >Web Development</div>

        <div
          onClick={() => { handleActiveCourse("JavaScript"); setInactiveSubject(); set_JavaScriptSubject_Clicked(!is_JavaScriptSubject_Clicked) }}
          className={`${is_JavaScriptSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >JavaScript</div>

        <div
          onClick={() => { handleActiveCourse("DataScience"); setInactiveSubject(); set_DataScienceSubject_Clicked(!is_DataScienceSubject_Clicked) }}
          className={`${is_DataScienceSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >Data Science</div>

        <div
          onClick={() => { handleActiveCourse("AWSCertification"); setInactiveSubject(); set_AWSSubject_Clicked(!is_AWSSubject_Clicked) }}
          className={`${is_AWSSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >AWS Certification</div>

        <div
          onClick={() => { handleActiveCourse("Drawing"); setInactiveSubject(); set_DrawingSubject_Clicked(!is_DrawingSubject_Clicked) }}
          className={`${is_DrawingSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
        >Drawing</div>
      </div>
    )
  }

  // render danh sách môn cùng slider các khóa thuộc môn đó
  const renderSubjectList = (sliderSetting) => {
    return (
      <div >
        <div >
          {(width < breakpoint1024) ? (
            <Slider {...sliderSetting}>
              <div
                onClick={() => { handleActiveCourse("Python"); setInactiveSubject(); set_PythonSubject_Clicked(!is_PythonSubject_Clicked) }}
                className={`${is_PythonSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}>Python</div>

              <div
                onClick={() => { handleActiveCourse("Excel"); setInactiveSubject(); set_ExcelSubject_Clicked(!is_ExcelSubject_Clicked) }}
                className={`${is_ExcelSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >Excel</div>

              <div
                onClick={() => { handleActiveCourse("WebDevelopment"); setInactiveSubject(); set_WebDevSubject_Clicked(!is_WebDevSubject_Clicked) }}
                className={`${is_WebDevSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >Web Development</div>

              <div
                onClick={() => { handleActiveCourse("JavaScript"); setInactiveSubject(); set_JavaScriptSubject_Clicked(!is_JavaScriptSubject_Clicked) }}
                className={`${is_JavaScriptSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >JavaScript</div>

              <div
                onClick={() => { handleActiveCourse("DataScience"); setInactiveSubject(); set_DataScienceSubject_Clicked(!is_DataScienceSubject_Clicked) }}
                className={`${is_DataScienceSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >Data Science</div>

              <div
                onClick={() => { handleActiveCourse("AWSCertification"); setInactiveSubject(); set_AWSSubject_Clicked(!is_AWSSubject_Clicked) }}
                className={`${is_AWSSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >AWS Certification</div>

              <div
                onClick={() => { handleActiveCourse("Drawing"); setInactiveSubject(); set_DrawingSubject_Clicked(!is_DrawingSubject_Clicked) }}
                className={`${is_DrawingSubject_Clicked ? 'active' : ''} font-semibold text-xl mr-3 cursor-pointer subjectItem`}
              >Drawing</div>
            </Slider>
          ) : (
            <div>
              {renderSubjectListItem()}
            </div>
          )}
        </div>

        <div className=" mt-5 p-7 border-2">
          {renderEachSubjectContent(activeSubject)}
        </div>

      </div>

    )
  }

  // render giới thiệu môn và button chọn khóa
  const renderSubjecIntro = (subject) => {
    switch (subject) {
      case "Python":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Expand your career opportunities with Python</h3>
              <p className="my-2">Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>

          </div>
        );
      case "Excel":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Analyze and visualize data with Excel</h3>
              <p className="my-2">Regardless of the industry you work in, Microsoft Office Excel is an invaluable spreadsheet program for organizing and representing data. Excel offers functions, formulas, and pivot tables to help you aggregate and then analyze large sets of information.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
      case "WebDevelopment":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Build websites and applications with Web Development</h3>
              <p className="my-2">The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
      case "JavaScript":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Grow your software development skills with JavaScript</h3>
              <p className="my-2">JavaScript is one of the most ubiquitous programming languages on the planet, mostly because it's the backbone of interactive web applications. On top of that, JavaScript is a great language for beginners because it gives them a chance to write code that does something visual, which is exciting and helpful when you're just...</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
      case "DataScience":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Lead data-driven decisions with Data Science</h3>
              <p className="my-2">Data science is everywhere. Better data science practices are allowing corporations to cut unnecessary costs, automate computing, and analyze markets. Essentially, data science is the key to getting ahead in a competitive global climate.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
      case "AWSCertification":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Become an expert in cloud computing with AWS Certification</h3>
              <p className="my-2">Because Amazon Web Services is a constantly evolving cloud ecosystem, staying up with new AWS services and features can be a chore. That’s why earning an AWS certification is such a great IT career move. In the eyes of future employers, you are an AWS authority.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
      case "Drawing":
        return (
          <div>
            <div>
              <h3 className="font-bold text-2xl">Expand your creative skillset with Drawing</h3>
              <p className="my-2">Besides being the foundation upon which most art forms are built, drawing is also an excellent way to relieve stress and feed your inner creativity. Drawing teaches us how to be observant, develop an attention to detail, and express ourselves.</p>
            </div>
            <div className="flex justify-between">
              <button className="border-2 border-gray-900 p-2 font-bold text-sm mt-2">Explore Python</button>
              {(width >= breakpoint1024) ? setSlideButton("selectCourse") : <></>}
            </div>
          </div>
        );
    }
  }

  // isSmallSize={isCourseSmallSize}
  const renderCourseList = (isCourseSmallSize) => {
    return courseList.map((item, index) => {
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
          Students are viewing
          <div>
            {(width >= breakpoint1024) ? setSlideButton("allCourse") : (<></>)}
          </div>
        </h3>

        <div>
          <Slider ref={allSlideRef} {...allCourseSliderSetting}>
            {renderCourseList(isCourseSmallSize)}
          </Slider>
        </div>

      </div>
    )
  }

  //--------------------***--------------------


  // HÀM RENDER COMPONENT THEO KÍCH THƯỚC MÀN HÌNH --------------------
  const renderSmallPhoneScreen = () => {
    return (
      <div>
        <div className="subjectBoard">

          <div onClick={() => handleDropDownCourses("Python")} className="pointer subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Python</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_PythonSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("Excel")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Excel</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_ExcelSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("WebDevelopment")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Web Development</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_WebDevSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("JavaScript")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>JavaScript</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_JavaScriptSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("DataScience")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Data Science</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_DataScienceSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("AWSCertification")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>AWS Certification</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_AWSSubject_Clicked)}

          <div onClick={() => handleDropDownCourses("Drawing")} className="subjectItemBorder font-bold items-center inline-flex justify-between">
            <p>Drawing</p>
            <i class="fas fa-chevron-down"></i>
          </div>
          {renderDropdownCourse(is_DrawingSubject_Clicked)}
        </div>
        <div>
          {renderAllCourse(isCourseSmallSize)}
        </div>
      </div>

    );
  }

  const renderMediumPhoneScreen = () => {
    return (
      <div>
        <div>
          {renderSubjectList(subjectSliderSetting)}

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
          <h3 className="font-bold font-serif text-2xl">A broad selection of courses</h3>
          <p className="text-lg">Choose from 155,000 online video courses with new additions published every month</p>
        </div>
        <div className="mt-5">
          {renderSubjectList(subjectSliderSetting)}
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
          <h3 className="font-bold font-serif text-3xl">A broad selection of courses</h3>
          <p className="text-xl">Choose from 155,000 online video courses with new additions published every month</p>
        </div>
        <div className="mt-5">
          {renderSubjectList(subjectSliderSetting)}
        </div>
        <div>
          {renderAllCourse()}
        </div>
      </div>
    );
  }
  //--------------------***--------------------

  // "px-6"
  return (
    <div className={`${width > breakpoint1400 ? 'px-48' : 'px-6'}`}>
      {
        (width >= breakpoint1024) ? renderLaptopScreen() :
          (width >= breakpoint768) ? renderTabletScreen() :
            (width >= breakpoint600) ? renderMediumPhoneScreen() : renderSmallPhoneScreen()
      }
    </div >
  )

}

export default CourseBoard;
