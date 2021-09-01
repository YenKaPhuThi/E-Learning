import { actionTypes } from "../Actions/type";

const initialState = {
  courseCategories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE_CATEGORIES:
      state.courseCategories = action.payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
