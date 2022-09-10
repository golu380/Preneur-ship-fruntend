import "./../css/Connections.css";
import { Link } from "react-router-dom";
import l from "./../images/company-logo.jpg";
import lp from "./../images/company-logo.jpg";
import p from "./../images/search-icon.png";
import React from "react";
const IConnections = () => {
  return (
    <>
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
              <Link
                to="./investor-messages"
                className="E-17-btn3"
                type="submit"
              >
                Messages <span>+</span>
              </Link>
              <Link
                to="./investor-connections"
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
            <Link className="E-17-btn1" to="./investor-home" type="submit">
              Next &#62;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IConnections;
