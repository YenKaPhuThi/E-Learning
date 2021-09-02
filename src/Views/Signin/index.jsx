/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from "react";
import Layout from "../../HOC/Layout";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
export default function Signin() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <div>
      <Layout>
        <div className="my-20 flex flex-col items-center justify-center ">
          <div className="flex flex-col bg-white  px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
            <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
              Login To Your Account
            </div>
            <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
              <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-black">
                <i className="fab fa-facebook-f" />
              </span>
              <span>Login with Facebook</span>
            </button>
            <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
              <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-black">
                <Icon icon="bi:apple" />
              </span>
              <span>Login with Apple</span>
            </button>

            <div className="mt-10">
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Tài Khoản
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <Icon icon="ant-design:user-outlined" />
                    </div>
                    <input
                      onChange={formik.handleChange}
                      name="taiKhoan"
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Tài Khoản"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Mật Khẩu
                  </label>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                      <span>
                        <Icon icon="teenyicons:password-outline" />
                      </span>
                    </div>
                    <input
                      onChange={formik.handleChange}
                      type="password"
                      name="matKhau"
                      className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                      placeholder="Mật Khẩu"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-6 -mt-4">
                  <div className="flex ml-auto">
                    <a
                      href="#"
                      className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                    >
                      Quên mật khẩu?
                    </a>
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-purple-600 hover:bg-purple-700 rounded py-2 w-full transition duration-150 ease-in"
                  >
                    <span className="mr-2 uppercase">Login</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center mt-6">
              <NavLink
                to="/signup"
                className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
              >
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </span>
                <span className="ml-2">Bạn chưa có tài khoản ?</span>
              </NavLink>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
