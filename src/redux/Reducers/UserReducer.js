import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { SIGN_IN_ACTION } from "../Actions/Types/UserType";

const initialState = {
    userLogin: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_ACTION:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload));
            localStorage.setItem(TOKEN, action.payload.accessToken);
            return {...state, userLogin: action.payload };

        default:
            return state;
    }
};

export default reducer;