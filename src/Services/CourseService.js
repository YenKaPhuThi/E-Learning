import { baseService } from "./baseService";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  getCourseList = () =>
    this.get("api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");

  getCourseCategories = () => this.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");

  registerCourse = (dataRequest) => {
    this.post("api/QuanLyKhoaHoc/DangKyKhoaHoc", dataRequest);
  };

  reverseCourse = (dataRequest) => {
    this.post("api/QuanLyKhoaHoc/HuyGhiDanh", dataRequest);
  }
}

export const courseService = new CourseService();
