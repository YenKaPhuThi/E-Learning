import React from 'react';

import "./styles.css"

const CourseItem = (props) => {
    const title = "2021 Complete Python Bootcamp From Zero to Hero in Python";
    const isSmallSize = props.isSmallSize;

    // Destructuring
    const { hinhAnh, tenKhoaHoc, nguoiTao, ngayTao, luotXem } = props.data;
    // console.log(index, hinhAnh, tenKhoaHoc)

    // Optional Chaining
    // const hinhAnh = props.data?.hinhAnh;
    // const tenKhoaHoc = props.data?.tenKhoaHoc;
    // console.log(tenKhoaHoc, hinhAnh,);

    // render item kích cỡ bình thường cho các màn hình còn lại
    const renderOtherScreen = () => {
        return (
            <div>
                <div class="flex items-center py-50">
                    <div class="max-w-xs bg-white overflow-hidden cursor-pointer py-4 pr-4">

                        <div>
                            {/* <img className="courseImg" alt="course image" /> */}
                            <img src={hinhAnh} className="courseImg" alt="course image" />
                        </div>

                        <div className="my-3">
                            <p className="coureName">
                                {tenKhoaHoc}
                                {/* {title.slice(0, 40)}... */}
                            </p>

                            <p className="text-sm author">
                                {nguoiTao.hoTen}
                                {/* Jose Portilla */}
                            </p>

                            <div className="flex py-1">
                                <p className="voteScore text-sm font-bold">Lượt xem: {luotXem}</p>
                                <p className="voteQuantity ml-1">{ngayTao}</p>
                            </div>
                        </div>

                        <div className="cartButton">
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // render item nhỏ cho màn hình nhỏ
    const renderSmallPhoneScreen = () => {
        return (
            <div className="smallCourseItem">
                <div class="flex py-1 pr-2 cursor-pointer">
                    <div className="my-2">
                        <img src={hinhAnh} className="smallCourseImg" alt="course image" />
                        <div className="cartButton">
                            <button><i class="fas fa-cart-plus"></i></button>
                        </div>
                    </div>
                    <div class="w-60 bg-white overflow-hidden ml-3">
                        <div className="my-3">
                            <p className="coureName">
                                {(tenKhoaHoc.length >= 28) ? `${tenKhoaHoc.slice(0, 15)}...` : `${tenKhoaHoc}`}
                                {/* {tenKhoaHoc.slice(0, 20)} */}

                            </p>

                            <p className="text-xs author">
                                {nguoiTao.hoTen}
                                {/* Jose Portilla */}
                            </p>

                            <div>
                                <p className="voteScore text-xs font-bold">Lượt xem: {luotXem}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div>
            {
                (isSmallSize) ? (
                    renderSmallPhoneScreen()
                ) : (
                    renderOtherScreen()
                )
            }

        </div>
    );
};

export default CourseItem;
