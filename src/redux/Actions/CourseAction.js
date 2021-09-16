import { actionCourseTypes } from "./Types/CourseType";
import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

export const fetchCourseList = (dataRequest) => {
  return async (dispatch) => {
    try {
      const result = await courseService.getCourseList(dataRequest);

      dispatch(createAction(actionCourseTypes.SET_COURSE_LIST, result.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCourseCategories = () => {
  return async (dispatch) => {
    try {
      const result = await courseService.getCourseCategories();

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
      const result = await courseService.getCourseList(dataRequest);

      return dispatch(
        createAction(actionCourseTypes.SET_COURSE_SEARCHED, result.data)
      );

      callBack();
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
