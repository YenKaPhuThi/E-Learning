import { userService } from "../../Services/UserService";
import { SIGN_IN_ACTION, SIGN_UP_ACTION } from "./Types/UserType";
import { createAction } from ".";

export const signInAction = (thongTinDangNhap, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.signIn(thongTinDangNhap);
            dispatch(createAction(SIGN_IN_ACTION, result.data));
            callBack();

            console.log(result.data);
            alert("Đăng nhập thành công");
        } catch (error) {
            console.log(error);
            alert(error.response.data);
        }
    };
};
export const signUpAction = (thongTinDangKi, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.signUp(thongTinDangKi);
            dispatch(createAction(SIGN_UP_ACTION));
            callBack();
            console.log(result);
            alert("Đăng kí thành công");
        } catch (err) {
            console.log(err);
            alert(err.response.data);
        }
    };
};