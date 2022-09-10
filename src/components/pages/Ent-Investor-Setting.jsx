import "./../css/Investor-Setting.css";
import { Link } from "react-router-dom";
import React from "react";
// import e from "./../images/img3.jpg";
const ISetting = () => {
  return (
    <>
      {/* <div className="E-I-navbar2">


<img src="./h.png" className="E-I-s" alt="" />
<img src="./c.png" className="E-I-t" alt="" />
<img src="./s.png" className="E-I-u" alt="" />
</div> */}

      <div className="E-I-container">
        <div className="E-I-circle1"></div>
        <div className="E-I-circle2"></div>
        <div className="E-I-box1">
          <img src="" alt="" />
          <h3>Preneurship</h3>

          <div className="E-I-box2">
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
            <Link to="/app/investor" className="E-I-btn" type="submit">
              Update &#62;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ISetting;
