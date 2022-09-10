import "./../css/Investor-verification.css";
import { Link } from "react-router-dom";
import s from "./../images/success icon.png";
import React from "react";
import i from "./../images/img3.jpg";
const IVerify = () => {
  return (
    <>
      <div className="E-6-container1">
        {/* <div className="E-6-cirle1"></div>
            <div className="E-6-cirle2"></div> */}

        {/* Taking a div  E-11-circle from investor-overview.jsx with same styling */}
        <div className="E-11-circle1"></div>
        <div className="E-11-circle2"></div>
        <div className="E-6-main-box">
          <div className="E-6-box1">
            <h2>
              Its time to verify! <img src={s} alt="" />{" "}
            </h2>
            <input type="text" placeholder="Company owner" /> <br />
            <input type="text" placeholder="Company type" /> <br />
            <input type="text" placeholder="Company verification" /> <br />
            <label className="E-6-pancard">
              Pan card <span>*</span>
            </label>{" "}
            <br></br>
            {/* <h5>Pan card <span>*</span></h5> */}
            {/* <h2>Pan Card</h2> */}
            <input type="file" accept=".jpg, .jpeg, .png" /> <br />
            <div className="E-6-btn2">
              <Link style={{ color: "white", textDecoration: "none" }} to="">
                Need time to verify{" "}
              </Link>{" "}
            </div>
            {/* <Link  to="">Need </Link> <br /> <br></br> */}
            <br></br>
            <Link className="E-6-btn1" to="./investor-overview" type="submit">
              Next &#62;
            </Link>
          </div>
          <div className="E-6-box2">
            <img src={i} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IVerify;
