import { actionTypes } from "./type";
import { createAction } from "./index";
import { request } from "../../Api/request";

export const fetchCourseCategories = (dispatch) => {
  request({
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  })
    .then((res) => {
      dispatch(createAction(actionTypes.SET_COURSE_CATEGORIES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
