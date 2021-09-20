import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          <span className="text-grey-500 opacity-75   " style={{ top: "50%" }}>
            <i className="fas fa-circle-notch fa-spin fa-5x" />
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
