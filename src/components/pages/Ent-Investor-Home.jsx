import "./../css/Investor-Home.css";
import { Link } from "react-router-dom";
import h from "./../images/h.png";
import c from "./../images/c.png";
import s from "./../images/s.png";
import React from "react";
import l from "./../images/product-images.jpg";
const IHome = () => {
  return (
    <>
      <div className="E-14-navbar2">
        <Link to="/app/investor">
          {" "}
          <img src={h} className="E-14-s" alt="" />
        </Link>
        <Link to="/app/investor/profile">
          {" "}
          <img src={c} className="E-11-t" alt="" />
        </Link>
        <Link to="/app/investor/portfolio">
          {" "}
          <img src={s} className="E-11-u" alt="" />
        </Link>
      </div>
      <div className="E-14-container1">
        <div className="E-14-navbar">
          {" "}
          <span>
            <h5>John dept</h5>
            <p>Ozone pvt. ltd</p>
            <Link to="/app/investor/messages" className="E-14-notification ">
              {" "}
              <span>Inbox</span>
              <span className="E-14-badge">+</span>
            </Link>
          </span>{" "}
        </div>
        <div className="E-14-circle1"></div>
        <div className="E-14-circle2"></div>

        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-14-box2">
        <input type="text" placeholder="Product description" name="" id="" />{" "}
        <br />
        <input type="text" placeholder="Company Valuation" name="" id="" />{" "}
        <br />
        <input type="text" placeholder="Business Pitch" name="" id="" /> <br />
        <div className="E-14-product-section">
          <label for="">Images</label> <br />
          <span>
            <img src={l} alt="" />
          </span>
          <span>
            <img src={l} alt="" />
          </span>
          <span>
            <img src={l} alt="" />
          </span>
          + <br />s
        </div>
        {/* <Link href="./fifteen" className="E-14-btn1"  type="submit">Next &#62;</Link>  */}
      </div>
    </>
  );
};

export default IHome;
