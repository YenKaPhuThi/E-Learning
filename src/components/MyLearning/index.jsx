import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../HOC/Layout";
import { fetchCourseList } from "../../Redux/Actions/CourseAction";

import { getInforUserAction } from "../../Redux/Actions/UserAction";

export default function MyLearning() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourseList());
    dispatch(getInforUserAction());
  }, [dispatch]);
  const { userLogin } = useSelector((state) => state.user);
  const { courseList } = useSelector((state) => state.course);

  const { chiTietKhoaHocGhiDanh } = userLogin;

  const listCourses = [].concat(
    chiTietKhoaHocGhiDanh?.map((detail) => {
      return courseList?.filter((item) => {
        return item.maKhoaHoc === detail.maKhoaHoc;
      });
    })
  );

  const courses = [];
  listCourses.forEach((item) => {
    return courses.push(item[0]);
  });

  console.log(courses);

  return (
    <Layout>
      <div className="flex justify-around flex-col md:flex-row  p-6  sm:p-10 bg-gray-50 text-gray-800">
        <div className="">
          <h2 className="text-xl font-semibold">
            {courses?.length} Khóa học đã đăng ký
          </h2>
          {courses?.map((course, index) => {
            return (
              <div key={index} className="card flex py-4">
                <div className="flex-shrink-0 mr-2 md:mr-4">
                  <img
                    className="card-img-top w-16 h-16 object-cover md:w-64 md:h-36"
                    src={course.hinhAnh}
                    alt="Course Image"
                  />
                </div>
                <div className="card-body flex w-full">
                  <div className="flex-1 pr-8">
                    <h4 className="card-title font-bold mb-1">
                      {course.tenKhoaHoc}
                    </h4>
                    <p className="text-sm">
                      {course.moTa.slice(0, 250) + " ..."}
                    </p>
                    <p className="card-text text-xs text-gray mb-1">
                      Người tạo: {course.hoTen} . Tài khoản: {course.taiKhoan}
                    </p>
                    <div class="flex align-middle py-1.5">
                      <p className="voteScore text-sm font-bold">4.6</p>
                      <div className="voteIconGroup">
                        <i class="voteIcon fas fa-star"></i>
                        <i class="voteIcon fas fa-star"></i>
                        <i class="voteIcon fas fa-star"></i>
                        <i class="voteIcon fas fa-star"></i>
                        <i class="voteIcon fas fa-star-half-alt"></i>
                      </div>
                      <p className="text-xs text-gray">(379,107)</p>
                    </div>
                    <p className="text-xs text-gray mb-1">
                      Số lượng học viên: {course.soLuongHocVien}
                    </p>
                  </div>
                  <ul className="text-right">
                    <li className="font-bold">{course.luotXem} lượt xem</li>
                    <li className="text-gray text-xs">{course.ngayTao}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-start flex-col pl-20">
          <div className="space-y-1">
            <div>
              Tổng :
              <p className="font-semibold text-5xl">
                {courses?.reduce((tongLuotXem, item, index) => {
                  return (tongLuotXem += item.luotXem);
                }, 0)}{" "}
                lượt xem
              </p>
            </div>
          </div>
          <div className=" flex md:flex-col flex-row self-stretch items-center md:self-auto    ">
            <button
              type="button"
              className="w-full py-2 mr-5 md:mr-0 my-5 border rounded-md border-purple-600"
            >
              Quay lại
              <span className="sr-only sm:not-sr-only"> trang chủ</span>
            </button>

            <button
              type="button"
              className="px-6 py-2 border rounded-md  bg-purple-600 text-gray-50 border-purple-600"
            >
              <span className="sr-only sm:not-sr-only ">Tiếp tục </span>
              Xem
            </button>
          </div>
        </div>
      </div>
      );
    </Layout>
  );
}
