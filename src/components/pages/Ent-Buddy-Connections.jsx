import "./../css/Connections.css";
import { Link } from "react-router-dom";
import l from "./../images/company-logo.jpg";
import lp from "./../images/company-logo.jpg";
import React from "react";
import p from "./../images/search-icon.png";
const BConnections = () => {
  return (
    <>
      {/* <div className="E-17-navbar2">
   <img src={h}className="E-11-s" alt="" />
    <img src={c} className="E-11-t" alt=""/>
    <img src={s} className="E-11-u" alt=""/>
 </div> */}
      <div className="E-17-container">
        <div className="E-17-box1">
          <img src={l} alt="" />
          <h2>Preneurship</h2>
          <input type="text" />
          <img src={p} alt="" />
        </div>

        <div className="E-17-box2">
          <div className="E-17-row">
            <div className="E-17-col-6">
              <Link to="./buddy-messages" className="E-17-btn3" type="submit">
                Messages <span>+</span>
              </Link>
              <Link
                to="./budddy-connections"
                className="E-17-btn2"
                type="submit"
              >
                Connections
              </Link>
              <div className="E-17-name-section">
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
                <span>
                  {" "}
                  <img src={lp} alt="" /> Name{" "}
                </span>
              </div>
            </div>
            {/* <a ><Link className="E-17-btn1" to="./buddy-home" type="submit">Next &#62;</Link> </a> */}
            <Link className="E-17-btn1" to="./buddy-home" type="submit">
              Next &#62;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BConnections;
