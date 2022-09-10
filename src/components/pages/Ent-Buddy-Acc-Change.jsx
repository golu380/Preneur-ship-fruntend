import "./../css/Buddy-Acc-Change.css";
import { Link } from "react-router-dom";
import s from "./../images/img3.jpg";
import React from "react";
const BChange = () => {
  return (
    <>
      <div className="E-7-container1">
        <div className="E-7-circle1"></div>
        <div className="E-7-circle2"></div>
        <div className="E-7-main-box">
          <div className="E-7-box1">
            <h2>Change account to</h2>
            <p>Looking for investors?</p>
            <Link className="E-7-btn1" to="./investor" type="submit">
              YES
            </Link>
            <Link to="/app/buddy-profile" className="E-7-btn1" type="submit">
              NO
            </Link>
          </div>
          <div className="E-7-box2">
            <img src={s} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BChange;
