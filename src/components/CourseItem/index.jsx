import React, { useState, useEffect } from "react";

import "./styles.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  registerCourse,
  reverseCourse,
} from "../../Redux/Actions/CourseAction";

const CourseItem = (props) => {
  const title = "2021 Complete Python Bootcamp From Zero to Hero in Python";
  const isSmallSize = props.isSmallSize;
  const {
    hinhAnh,
    tenKhoaHoc,
    nguoiTao,
    ngayTao,
    luotXem,
    moTa,
    maKhoaHoc,
    soLuongHocVien,
    danhMucKhoaHoc,
  } = props.data;
  const { index } = props.index;
  // console.log(index, hinhAnh, tenKhoaHoc)

  const dispatch = useDispatch();

  const [isCourseRegisted, setIsCourseRegisted] = useState(false);

  useEffect(() => {
    handleFindCourseUserRegisted(maKhoaHoc);
  }, [maKhoaHoc]);

  const userLogin = useSelector((state) => {
    return state.user?.userLogin;
  });

  const { chiTietKhoaHocGhiDanh } = userLogin;

  const handleFindCourseUserRegisted = (maKhoaHoc) => {
    const codeCourseRegisted = chiTietKhoaHocGhiDanh?.map(
      (item) => item.maKhoaHoc
    );

    const isCourseInRegistedList = codeCourseRegisted?.indexOf(maKhoaHoc);

    if (isCourseInRegistedList > -1) {
      setIsCourseRegisted(!isCourseRegisted);
    }
  };

  const handleRegisterReverseCoure = (codeCourse, action) => {
    const dataRequest = {
      maKhoaHoc: codeCourse,
      taiKhoan: userLogin?.taiKhoan,
    };

    handleFindCourseUserRegisted(codeCourse);

    dispatch(action(dataRequest));

    setIsCourseRegisted(!isCourseRegisted);
  };

  /*
    "tenKhoaHoc": 
    "ngayTao": 
    "moTa": 
    "soLuongHocVien": 
    "luotXem": 
    X"nguoiTao": "tenLoaiNguoiDung": "hoTen":
    "danhMucKhoaHoc": "tenDanhMucKhoaHoc":    
    */
  const HoverText = () => {
    return (
      <div className="detailCardHover flex flex-col">
        <div className="flex-1">
          <p className="text-base font-bold">{tenKhoaHoc}</p>
          <p>
            <span className="text-xs updateDayText">Cập nhập: </span>
            <span className="text-xs font-bold updateDayText">{ngayTao}</span>
          </p>
          <p className="text-sm p-1">{`${moTa.slice(0, 140)}...`}</p>
          <p className="text-xs">Lược xem: {luotXem}</p>
        </div>
        <>
          {!isCourseRegisted ? (
            <button
              className="cartButton w-full font-bold mt-2"
              onClick={() => {
                handleRegisterReverseCoure(maKhoaHoc, registerCourse);
              }}
            >
              Đăng ký
            </button>
          ) : (
            <button
              className="cartButton w-full font-bold mt-2"
              onClick={() => {
                handleRegisterReverseCoure(maKhoaHoc, reverseCourse);
              }}
            >
              Hủy
            </button>
          )}
        </>
      </div>
    );
  };

  // render item kích cỡ bình thường cho các màn hình còn lại
  const renderOtherScreen = () => {
    return (
      <div className="otherCourseItem">
        {/* <button class='hover-detail'>
                    <span class='hover-detail--off'>Default</span>
                    <span class='hover-detail--on'>Hover!</span>
                </button> */}
        <div class="flex items-center py-50 hover-detail ">
          <span className="hover-detail--off">
            <div class="min-w-min bg-white overflow-hidden py-4 pr-4">
              <div>
                <img src={hinhAnh} className="courseImg" alt="course image" />
              </div>

              <div className="my-3">
                <p className="coureName">{tenKhoaHoc}</p>

                <p className="text-sm author">{nguoiTao.hoTen}</p>

                <div className="flex py-1">
                  <p className="voteScore text-sm font-bold">
                    Lượt xem: {luotXem}
                  </p>
                  <p className="voteQuantity ml-1">{ngayTao}</p>
                </div>
              </div>
            </div>
          </span>
          <span className="hover-detail--on">
            <HoverText />
          </span>
        </div>
      </div>
    );
  };

  // render item nhỏ cho màn hình nhỏ
  const renderSmallPhoneScreen = () => {
    return (
      <div className="smallCourseItem">
        <div class="flex py-1 pr-2 cursor-pointer">
          <div className="my-2">
            <img src={hinhAnh} className="smallCourseImg" alt="course image" />
          </div>
          <div class="w-60 bg-white overflow-hidden ml-3">
            <div className="my-3">
              <p className="coureName">
                {tenKhoaHoc.length >= 28
                  ? `${tenKhoaHoc.slice(0, 15)}...`
                  : `${tenKhoaHoc}`}
                {/* {tenKhoaHoc.slice(0, 20)} */}
              </p>

              <p className="text-xs author">
                {nguoiTao.hoTen}
                {/* Jose Portilla */}
              </p>

              <div>
                <p className="voteScore text-xs font-bold">
                  Lượt xem: {luotXem}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>{isSmallSize ? renderSmallPhoneScreen() : renderOtherScreen()}</div>
  );
};

export default CourseItem;
