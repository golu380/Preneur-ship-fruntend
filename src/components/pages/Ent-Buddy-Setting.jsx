import "./../css/Buddy-Setting.css";
import { Link } from "react-router-dom";
import React from "react";
// import e from "./../images/img3.jpg";
const BSetting = () => {
  return (
    <>
      <div className="E-10navbar2">
        <img src="./h.png" className="E-10-s" alt="" />
        <img src="./c.png" className="E-10-t" alt="" />
        <img src="./s.png" className="E-10-u" alt="" />
      </div>

      <div className="E-10-container">
        <div className="E-10-circle1"></div>
        <div className="E-10-circle2"></div>
        <div className="E-10-box1">
          <img src="" alt="" />
          <h3>Preneurship</h3>

          <div className="E-10-box2">
            <h3>Settings</h3>
            <input type="text" name="" id="" placeholder="Contact us" /> <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Change language"
            />{" "}
            <br />
            <input type="text" name="" id="" placeholder="Payments" /> <br />
            <Link
              to="/app/entrepreneur/partners/home"
              className="E-10-btn"
              type="submit"
            >
              Update &#62;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BSetting;
