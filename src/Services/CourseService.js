import { CODE_GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  getCourseList = (dataRequest = "") =>
    this.get(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${CODE_GROUP}&tenKhoaHoc=${dataRequest}`
    );

  getCourseDetail = (dataRequest) => this.get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${dataRequest}`);

  getCourseCategories = () => this.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");

  registerCourse = (dataRequest) =>
    this.post("api/QuanLyKhoaHoc/DangKyKhoaHoc", dataRequest);

  reverseCourse = (dataRequest) =>
    this.post("api/QuanLyKhoaHoc/HuyGhiDanh", dataRequest);
}

export const courseService = new CourseService();
