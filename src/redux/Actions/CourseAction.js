import { actionCourseTypes } from "./Types/CourseType";
import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import {
  UPDATE_COURSE_USER_REGISTED,
  UPDATE_COURSE_USER_REVERSED,
} from "../Actions/Types/UserType";

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

export const fetchCourseDetail = (dataRequest) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await courseService.getCourseDetail(dataRequest);

      dispatch(createAction(actionCourseTypes.SET_COURSE_DETAIL, result.data))
    } catch (error) {
      
    }
  }
}

export const fetchCourseCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await courseService.getCourseCategories();

      await dispatch(
        createAction(actionCourseTypes.SET_COURSE_CATEGORIES, result.data)
      );
      dispatch(hideLoadingAction);
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerCourse = (dataRequest) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await courseService.registerCourse(dataRequest);

      await dispatch(createAction(UPDATE_COURSE_USER_REGISTED));

      dispatch(hideLoadingAction);

      alert("Đã đăng ký thành công!")
    } catch (err) {
      console.log(err);
    }
  };
};

export const reverseCourse = (dataRequest) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await courseService.reverseCourse(dataRequest);

      await dispatch(createAction(UPDATE_COURSE_USER_REVERSED));

      dispatch(hideLoadingAction);
      alert("Đã hủy thành công!")
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
