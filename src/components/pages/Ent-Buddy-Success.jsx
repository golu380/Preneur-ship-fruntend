import "./../css/Buddy-Success.css";
import { Link } from "react-router-dom";
import React from "react";
import s from "./../images/success icon.png";
const BSuccess = () => {
  return (
    <>
      <div className="E-4-container1">
        <div className="E-4-box1">
          <img src={s} alt="" />
          <p>Success</p>
          <h3>WELCOME!</h3>
        </div>
        <Link
          className="E-4-btn1"
          to="/app/entrepreneur/partners/home"
          type="submit"
        >
          Next &#62;
        </Link>
      </div>
    </>
  );
};

export default BSuccess;
