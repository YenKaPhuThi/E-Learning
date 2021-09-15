import React from "react";
import { useSelector } from "react-redux";

// HOC
import Layout from "../../HOC/Layout";

// Styles
import "./style.css";

export default function Search() {
  const descLength = 250;

  const courseSearched = useSelector((state) => {
    return state.course.courseSearched;
  });

  const totalResult = courseSearched?.length;

  const renderCourseSearched = () => {
    return courseSearched.map((item, index) => {
      const { tenKhoaHoc, moTa, hinhAnh, luotXem, ngayTao, soLuongHocVien } = item;
      const { hoTen, taiKhoan } = item.nguoiTao;
      return (
        <li key={index} className="card flex py-4">
          <div className="flex-shrink-0 mr-2 md:mr-4">
            <img
              className="card-img-top w-16 h-16 object-cover md:w-64 h-36"
              src={hinhAnh}
              alt="Course Image"
            />
          </div>
          <div className="card-body flex w-full">
            <div className="flex-1 pr-8">
              <h4 className="card-title font-bold mb-1">{tenKhoaHoc}</h4>
              <p className="text-sm">{moTa.slice(0, descLength) + " ..."}</p>
              <p className="card-text text-xs text-gray mb-1">
                Người tạo: {hoTen} . Tài khoản: {taiKhoan}
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
              <p className="text-xs text-gray mb-1">Số lượng học viên: {soLuongHocVien}</p>
            </div>
            <ul className="text-right">
              <li className="font-bold">{luotXem} views</li>
              <li className="text-gray text-xs">{ngayTao}</li>
            </ul>
          </div>
        </li>
      );
    });
  };

  return (
    <Layout>
      <div className="py-8 px-6">
        <p className="font-bold text-gray text-right">{totalResult} results</p>
        <ul>{renderCourseSearched()}</ul>
      </div>
    </Layout>
  );
}
