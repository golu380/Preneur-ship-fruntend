import "./../css/Investor-Success.css";
import { Link } from "react-router-dom";
import React from "react";
import s from "./../images/success icon.png";
const ISuccess = () => {
  return (
    <>
      <div className="E-4-container1">
        {/* Taking a div  E-11-circle from investor-overview.jsx with same styling */}
        <div className="E-11-circle1"></div>
        <div className="E-11-circle2"></div>
        <div className="E-4-box1">
          <img src={s} alt="" />
          {/* <p>Success</p> */}
          <h3 className="E-4-text">Success</h3>
          <h1 className="E-4-text">WELCOME!</h1>
        </div>{" "}
        <br></br> <br></br>
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

export default ISuccess;
