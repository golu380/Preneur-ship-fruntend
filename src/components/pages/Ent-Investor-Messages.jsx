import "./../css/Messages.css";
import { Link } from "react-router-dom";
import l from "./../images/company-logo.jpg";
import lp from "./../images/company-logo.jpg";
import React from "react";
import p from "./../images/search-icon.png";
const IMessages = () => {
  return (
    <>
      <div className="E-16-container">
        <div className="E-16-box1">
          <img src={l} alt="" />
          <h2>Preneurship</h2>
          <input type="text" />
          <img src={p} alt="" />
        </div>

        <div className="E-16-box2">
          <div className="E-16-row">
            <div className="E-16-col-6">
              <Link
                to="./investor-messages"
                className="E-16-btn2"
                type="submit"
              >
                Messages
              </Link>
              <Link
                to="./investor-connections"
                className="E-16-btn3"
                type="submit"
              >
                Connections <span>+</span>
              </Link>
              <div className="E-16-name-section">
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
            <Link to="./investor-home" className="E-16-btn1" type="submit">
              {" "}
              &#60; Back{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IMessages;
