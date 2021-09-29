import { TOKEN } from "../../util/settings/config";
import {
    GET_INFOR_USER,
    INFO_USER,
    SIGN_IN_ACTION,
    UPDATE_INFOR_ACTION,
    UPDATE_COURSE_USER_REGISTED,
    UPDATE_COURSE_USER_REVERSED
} from "../Actions/Types/UserType";

const initialState = {
    userLogin: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ACTION:
            state.userLogin = action.payload;
            localStorage.setItem(TOKEN, action.payload.accessToken);
            return {...state };
            case GET_INFOR_USER || UPDATE_COURSE_USER_REGISTED || UPDATE_COURSE_USER_REVERSED:
                console.log("hi");
            state.userLogin = action.payload;
            localStorage.setItem(INFO_USER, JSON.stringify(action.payload));
            return {...state };
        case UPDATE_INFOR_ACTION:
            state.userLogin = action.payload;
            return {...state };
        default:
            return state;
    }
};

export default reducer;