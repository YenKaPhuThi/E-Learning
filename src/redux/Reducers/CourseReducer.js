import { actionCourseTypes, LIST_COURSES } from "../Actions/Types/CourseType";

const initialState = {
  courseList: [],
  courseSearched: [],
  courseCategories: [],
  isShowSearchNoResult: false,
  courseByCategori: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCourseTypes.SET_COURSE_LIST:
      state.courseList = action.payload;
      localStorage.setItem(LIST_COURSES, JSON.stringify(action.payload));
      return { ...state };

    case actionCourseTypes.SET_COURSE_SEARCHED:
      state.courseSearched = action.payload;
      state.isShowSearchNoResult = false;
      return { ...state };

    case actionCourseTypes.SET_COURSE_SEARCHED_NO_RESULT:
      state.isShowSearchNoResult = action.payload;
      return { ...state };

    case actionCourseTypes.SET_COURSE_CATEGORIES:
      state.courseCategories = action.payload;
      return { ...state };

    case actionCourseTypes.SET_COURSE_BY_CATEGORIES:
      state.courseByCategori = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
