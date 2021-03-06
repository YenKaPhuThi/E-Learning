import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { history } from "../../App";
import { useHistory } from "react-router";
import Layout from "../../HOC/Layout";
import { signUpAction } from "../../Redux/Actions/UserAction";

export default function Signup() {
  const history = useHistory();
  const dispatch = useDispatch();
  const goToSignIn = () => {
    return history.push("/signin");
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "",
      email: "",
    },
    onSubmit: (values) => {
      const action = signUpAction(values, goToSignIn);
      dispatch(action);

      console.log("values", values);
    },
  });
  return (
    <Layout>
      <form
        className="my-20  flex justify-center items-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="py-12 px-12 bg-white rounded-2xl  z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Create An Account
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Tài Khoản
              </label>
              <input
                required
                name="taiKhoan"
                onChange={formik.handleChange}
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="Tài Khoản"
              />
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Mật Khẩu
              </label>
              <input
                required
                name="matKhau"
                onChange={formik.handleChange}
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="password"
                placeholder="Mật Khẩu"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Email
                </label>
                <input
                  required
                  name="email"
                  onChange={formik.handleChange}
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Họ tên
                </label>
                <input
                  required
                  name="hoTen"
                  onChange={formik.handleChange}
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Họ tên"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Số Điện Thoại
                </label>
                <input
                  required
                  name="soDT"
                  onChange={formik.handleChange}
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="tel"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Mã Nhóm
                </label>
                <input
                  required
                  name="maNhom"
                  onChange={formik.handleChange}
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="GP01...GP05"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button className="py-3 w-64 text-xl text-white bg-purple-600 rounded-2xl">
              Sign Up
            </button>
            <p className="mt-4 text-sm">
              Already Have An Account?{" "}
              <NavLink to="/signin" className="underline cursor-pointer">
                {" "}
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </Layout>
  );
}
