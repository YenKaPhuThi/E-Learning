import { actionCourseTypes } from "./Types/CourseType";

import { courseService } from "../../Services/CourseService";
import { createAction } from ".";

export const fetchCourseCategories = () => {
    return async(dispatch) => {
        try {
            const result = await courseService.getCourseCategories();
            console.log(result);
            dispatch(
                createAction(actionCourseTypes.SET_COURSE_CATEGORIES, result.data)
            );
        } catch (err) {
            console.log(err);
        }
    };
};