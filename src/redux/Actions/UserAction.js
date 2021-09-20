import { userService } from "../../Services/UserService";
import {
    GET_INFOR_USER,
    SIGN_IN_ACTION,
    SIGN_UP_ACTION,
    UPDATE_INFOR_ACTION,
} from "./Types/UserType";
import { createAction } from ".";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const signInAction = (thongTinDangNhap, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.signIn(thongTinDangNhap);
            dispatch(createAction(SIGN_IN_ACTION, result.data));
            callBack();

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

            alert("Đăng kí thành công");
        } catch (err) {
            console.log(err);
            alert(err.response.data);
        }
    };
};
export const getInforUserAction = () => {
    return async(dispatch) => {
        try {
            dispatch(displayLoadingAction);
            const result = await userService.getInforUser();
            await dispatch(createAction(GET_INFOR_USER, result.data));
            dispatch(hideLoadingAction);
        } catch (err) {
            console.log(err);
        }
    };
};
export const updateInforAction = (thongTinNguoiDung, callBack) => {
    return async(dispatch) => {
        try {
            const result = await userService.updateInfor(thongTinNguoiDung);
            dispatch(createAction(UPDATE_INFOR_ACTION, result.data));
            callBack();
            console.log(result.data);
            alert("Thay đổi thông tin thành công");
        } catch (error) {
            console.log(error.response);
        }
    };
};