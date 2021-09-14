import React from 'react';

import "./styles.css"

const CourseItem = (props) => {
    const title = "2021 Complete Python Bootcamp From Zero to Hero in Python";
    const isSmallSize = props.isSmallSize;

    // Destructuring
    // const { hinhAnh, tenKhoaHoc } = props.data;
    // console.log(hinhAnh, tenKhoaHoc)
    // output: undefined

    // Optional Chaining

    // console.log(tenKhoaHoc, hinhAnh,);
    // output: ok   

    // render item kích cỡ bình thường cho các màn hình còn lại
    const renderOtherScreen = () => {
        const hinhAnh = props.data?.hinhAnh;
        const tenKhoaHoc = props.data?.tenKhoaHoc;
        return (
            <div>
                <div class="flex items-center py-50">
                    <div class="max-w-xs bg-white overflow-hidden cursor-pointer py-4 pr-4">

                        <div>
                            <img src={hinhAnh} className="courseImg" alt="Dog" />
                        </div>

                        <div className="my-3">
                            <p className="coureName">
                                {tenKhoaHoc}
                                {/* {title.slice(0, 40)}... */}
                            </p>

                            <p className="text-sm author">
                                Jose Portilla
                            </p>

                            <div class="flex py-1.5">
                                <p className="voteScore font-bold">4.6</p>
                                <div className="voteIconGroup">
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star-half-alt"></i>
                                </div>
                                <p className="voteQuantity">(379,107)</p>

                            </div>

                            <p className="font-bold text-lg">$89.99</p>
                        </div>


                    </div>
                </div>
            </div>
        )
    }

    // render item nhỏ cho màn hình nhỏ
    const renderSmallPhoneScreen = () => {
        return (
            <div>

                <div class="flex py-1 pr-2 cursor-pointer">
                    <div className="my-4">
                        <img src="https://picsum.photos/150/150" alt="Dog" />
                    </div>
                    <div class="max-w-xs bg-white overflow-hidden ml-3">
                        <div className="my-3">
                            <p className="coureName">
                                {title.slice(0, 40)}...
                            </p>

                            <p className="text-xs author">
                                Jose Portilla
                            </p>

                            <div class="flex py-1.5">
                                <p className="voteScore text-xs font-bold">4.6</p>
                                <div className="voteIconGroup">
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star"></i>
                                    <i class="voteIcon fas fa-star-half-alt"></i>
                                </div>
                                <p className="text-xs voteQuantity">(379,107)</p>

                            </div>

                            <p className="font-bold text-base">$89.99</p>
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
