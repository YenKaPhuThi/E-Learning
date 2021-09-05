import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import course from "./Reducers/CourseReducer";
import user from "./Reducers/UserReducer";
//create root reducer
const reducer = combineReducers({
    course,
    user,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);