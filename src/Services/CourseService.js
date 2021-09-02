/* eslint-disable no-useless-constructor */
import { baseService } from "./baseService";

// Suử dụng như 1 lớp đôi tượng nên cần phải viết hoa tên lớp
export class CourseService extends baseService {
    constructor() {
        super();
    }

    getCourseCategories = () =>
        this.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
}

export const courseService = new CourseService();