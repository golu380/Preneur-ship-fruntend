import "./../css/Final-Success.css";
import { Link } from "react-router-dom";
import s from "./../images/success icon.png";
import React from "react";
const FSuccess = () => {
  return (
    <>
      <div className="E-F-container1">
        <div className="E-F-box1">
          <img src={s} alt="" />
          <p>Success</p>
          <h3>WELCOME!</h3>
        </div>
        <Link
          className="E-F-btn1"
          to="/app/entrepreneur/partners/home"
          type="submit"
        >
          Next &#62;
        </Link>
      </div>
    </>
  );
};

export default FSuccess;
