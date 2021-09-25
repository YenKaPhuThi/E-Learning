import React, { useEffect, useState } from "react";
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

  const isShowSearchNoResult = useSelector((state) => {
    return state.course.isShowSearchNoResult;
  });

  const totalResult = courseSearched.length;

  const renderCourseSearched = () => {
    return courseSearched.map((item, index) => {
      const { tenKhoaHoc, moTa, hinhAnh, luotXem, ngayTao, soLuongHocVien } =
        item;
      const { hoTen, taiKhoan } = item.nguoiTao;
      return (
        <li key={index} className="card flex py-4">
          <div className="flex-shrink-0 mr-2 md:mr-4">
            <img
              className="card-img-top w-16 h-16 object-cover md:w-64 md:h-36"
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
              <p className="text-xs text-gray mb-1">
                Số lượng học viên: {soLuongHocVien}
              </p>
            </div>
            <ul className="text-right">
              <li className="font-bold">{luotXem} lượt xem</li>
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
        {isShowSearchNoResult ? (
          <div>
            <h2 className="text-2xl font-bold mb-8">
              Xin lỗi, chúng tôi không tìm thấy kết quả nào
            </h2>
            <h3 className="text-xl font-bold mb-6">
              Hãy thử điều chỉnh tìm kiếm của bạn. Đây là một số ý tưởng:
            </h3>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                Hãy chắc chắn rằng tất cả các từ đều đúng chính tả
              </li>
              <li className="mb-1">Thử các cụm từ tìm kiếm khác</li>
              <li className="mb-1">Thử các cụm từ tìm kiếm chung</li>
            </ul>
          </div>
        ) : (
          <>
            <p className="font-bold text-gray text-right">
              {totalResult} Kết quả
            </p>
            <ul>{renderCourseSearched()}</ul>
          </>
        )}
      </div>
    </Layout>
  );
}
