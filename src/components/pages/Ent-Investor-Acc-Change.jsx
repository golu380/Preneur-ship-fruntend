import "./../css/Investor-Acc-Change.css";
import { Link } from "react-router-dom";
import e from "./../images/img3.jpg";
import React from "react";
const IChange = () => {
  return (
    <>
      {" "}
      <div className="E-8-container1">
        <div className="E-8-circle1"></div>
        <div className="E-8-circle2"></div>
        <div className="E-8-main-box">
          <div className="E-8-box1">
            <h2>Change account to</h2>
            <p>Looking for a buddy?</p>
            <Link to="./buddy" className="E-8-btn1" type="submit">
              YES
            </Link>
            <Link to="./investor-home" className="E-8-btn1" type="submit">
              NO
            </Link>
          </div>
          <div className="E-8-box2">
            <img src={e} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IChange;
