import { TOKEN } from "../../util/settings/config";
import {
    GET_INFOR_USER,
    INFO_USER,
    SIGN_IN_ACTION,
    UPDATE_INFOR_ACTION,
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
        case GET_INFOR_USER:
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