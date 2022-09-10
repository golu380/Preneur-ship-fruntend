import "./../css/Investor-profile.css";
import { Link } from "react-router-dom";
import h from "./../images/h.png";
import c from "./../images/c.png";
import React from "react";
import s from "./../images/s.png";
import l from "./../images/product-images.jpg";
const IProfile = () => {
  return (
    <>
      {/* <div className="E-15-navbar2">
    <img src={h}className="E-11-s" alt="" />
    <img src={c} className="E-11-t" alt=""/>
    <img src={s} className="E-11-u" alt=""/>
    </div> */}
      <div className="E-15-container1">
        <div className="E-15-navbar">
          {" "}
          <span>
            <h5>John dept</h5>
            <p>Ozone pvt. ltd</p>
          </span>{" "}
        </div>
        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-15-box2">
        <label for="">My Profile</label> <br /> <br></br>
        <input type="text" name="" id="" placeholder="Owner name" /> <br />
        {/* <input type="text" name="" id="" placeholder="Add Owner"/> <br/> */}
        <input type="text" name="" id="" placeholder="Company type" /> <br />
        {/* <input type="text" name="" id="" placeholder="Add Company Type"/> <br/> */}
        <input type="text" name="" id="" placeholder="Company description" />{" "}
        <br />
        <input type="text" name="" id="" placeholder="Buisness pitch" /> <br />
        <div className="E-15-product-section">
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
          + <br />
        </div>
        <Link to="./investor-home" className="E-15-btn1" type="submit">
          {" "}
          Update
        </Link>
        <Link
          to="/app/investor/account-type-change"
          className="E-15-btn2"
          type="submit"
        >
          {" "}
          Change Account Type
        </Link>{" "}
        <br></br>
        <br></br>
        <Link to="/app/investor" className="E-15-btn3" type="submit">
          &#60; Back
        </Link>
        {/* <Link to="./investor-account-type-change"  className="E-15-btn3" type="submit"> Change Account Type</Link> */}
      </div>
    </>
  );
};

export default IProfile;
