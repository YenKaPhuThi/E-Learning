import { actionCourseTypes } from "./Types/CourseType";
import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const fetchCourseList = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await courseService.getCourseList();
      await dispatch(
        createAction(actionCourseTypes.SET_COURSE_LIST, result.data)
      );
      dispatch(hideLoadingAction);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCourseBySubject = (dataRequest) => {
  return async () => {
    try {
      const result = await courseService.getCourseBySubject(dataRequest);
      console.log("result", result);
    } catch (error) {
      console.log("fetchCourseBySubject", error);
    }
  };
  // const list = courseService.getCourseBySubject(dataRequest);
  // console.log("courseAction fetchCourseBySubject list", list);
  // return list;
};

export const fetchCourseCategories = () => {
  const courseCategoriIntro = [
    {
      maDanhMuc: "BackEnd",
      gioiThieu:
        "Backend là gì? Thế nhưng điều gì giúp phần front-end của một trang web có thể hoạt động được? Tất cả dữ liệu sẽ được lưu trữ ở đâu? Đó là phần việc của back end. Phần back end của một trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu. Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được. (Nguồn: topdev.vn)",
    },
    {
      maDanhMuc: "Design",
      gioiThieu:
        "Thiết kế web hay thiết kế website đơn giản là công việc tạo một trang web cho cá nhân, công ty, doanh nghiệp hoặc tổ chức. Có 2 phương thức chính để thiết kế Web đó là: thiết kế Web tĩnh và thiết kế Web động. (Nguồn: Wikipedia)",
    },
    {
      maDanhMuc: "DiDong",
      gioiThieu:
        "Lập trình viên mobile là một trong những ngành nghề khát nhân lực nhất hiện nay. Mobile Developer sẽ phối hợp cùng các nhóm chức năng để xây dựng và phát triển ứng dụng di động đáp ứng nhu cầu của người dùng. (Nguồn: topcv.vn)",
    },
    {
      maDanhMuc: "FrontEnd",
      gioiThieu:
        "Phần front-end của một trang web là phần tương tác với người dùng. Tất cả mọi thứ bạn nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt, là một sự kết hợp của HTML, CSS, và JavaScript được điều khiển bởi trình duyệt máy tính của bạn. (Nguồn: topdev.vn)",
    },
    {
      maDanhMuc: "FullStack",
      gioiThieu:
        "Khái niệm lập trình viên full stack là vai trò đã được phổ biến bởi bộ phận kỹ thuật của Facebook. Ý tưởng là một lập trình viên full stack có thể làm việc liên chức năng trên “stack” công nghệ, tức là cả front end lẫn back end. (Nguồn: topdev.vn)",
    },
    {
      maDanhMuc: "TuDuy",
      gioiThieu:
        "Hiểu một cách đơn giản tư duy lập trình là cách mà các nhà lập trình viên sử dụng đầu óc, chất xám của mình để tư duy, phân tích và giải quyết vấn đề, từ đó đưa ra cách giải quyết tốt nhất. Sau khi lựa chọn được phương án thích hợp, lập trình viên sẽ chuyển phương án đó thành mã code. (Nguồn: itnavi.com.vn)",
    },
  ];
  return async (dispatch) => {
    try {
      const result = await courseService.getCourseCategories();

      const list = [...result.data];
      result.data = list.map((dataItem) => {
        const intro = courseCategoriIntro.find((introItem) => {
          return introItem.maDanhMuc === dataItem.maDanhMuc;
        });
        return { ...dataItem, gioiThieu: intro.gioiThieu };
      });
      // console.log("new data", result.data);
      dispatch(
        createAction(actionCourseTypes.SET_COURSE_CATEGORIES, result.data)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerCourse = (dataRequest) => {
  return async (dispatch) => {
    try {
      const result = await courseService.registerCourse(dataRequest);
      alert("Đăng kí khóa học thành công");
    } catch (err) {
      console.log(err);
    }
  };
};

export const reverseCourse = (dataRequest) => {
  return async (dispatch) => {
    try {
      const result = await courseService.reverseCourse(dataRequest);
      alert("Hủy khóa học thành công");
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchCourse = (dataRequest, callBack) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await courseService.getCourseList(dataRequest);
      return dispatch(
        createAction(actionCourseTypes.SET_COURSE_SEARCHED, result.data)
      );
      callBack();
      dispatch(hideLoadingAction);
    } catch (err) {
      const showSearchNoResult = true;

      dispatch(
        createAction(
          actionCourseTypes.SET_COURSE_SEARCHED_NO_RESULT,
          showSearchNoResult
        )
      );
    }
  };
};
