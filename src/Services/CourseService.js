import { baseService } from "./baseService";

export class CourseService extends baseService {
  constructor() {
    super();
  }

  getCourseCategories = () => this.get("api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
}

export const courseService = new CourseService();