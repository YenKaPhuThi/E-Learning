/* eslint-disable no-useless-constructor */
import { baseService } from "./baseService";

// Suử dụng như 1 lớp đôi tượng nên cần phải viết hoa tên lớp
export class UserService extends baseService {
    constructor() {
        super();
    }
    signIn = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    signUp = (thongTinDangKi) => {
        return this.post("api/QuanLyNguoiDung/DangKy", thongTinDangKi);
    };
    getInforUser = () => {
        return this.post("api/QuanLyNguoiDung/ThongTinNguoiDung");
    };
    updateInfor = (thongTinNguoiDung) => {
        return this.put(
            `api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            thongTinNguoiDung
        );
    };
}

export const userService = new UserService();