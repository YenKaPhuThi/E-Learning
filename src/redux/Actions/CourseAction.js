import { actionCourseTypes } from "./Types/CourseType";
import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

export const fetchCourseList = () => {
  return async (dispatch) => {
    try {
      const result = await courseService.getCourseList();

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
