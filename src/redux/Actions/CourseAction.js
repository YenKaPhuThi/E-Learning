import { actionCourseTypes } from "./Types/CourseType";
import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const fetchCourseList = () => {
    return async(dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await courseService.getCourseList();
            dispatch(createAction(actionCourseTypes.SET_COURSE_LIST, result.data));
            dispatch(hideLoadingAction);
        } catch (err) {
            console.log(err);
        }
    };
};

export const fetchCourseCategories = () => {
    return async(dispatch) => {
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
    return async(dispatch) => {
        try {
            const result = await courseService.registerCourse(dataRequest);
            alert("Đăng kí khóa học thành công");
        } catch (err) {
            console.log(err);
        }
    };
};

export const reverseCourse = (dataRequest) => {
    return async(dispatch) => {
        try {
            const result = await courseService.reverseCourse(dataRequest);
            alert("Hủy khóa học thành công");
        } catch (err) {
            console.log(err);
        }
    };
};

export const searchCourse = (dataRequest, callBack) => {
    return async(dispatch) => {
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