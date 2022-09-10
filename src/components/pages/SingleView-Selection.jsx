import React from "react";
import "../css/Selection.css";
import { Link } from "react-router-dom";
function Selection() {
  // const Link=
  return (
    <>
      <div className="main">
        <div className="quarter"></div>
        <section className="registration">
          <div className="title">
            {" "}
            <div className="logo"></div> <span> Preneurship </span>
          </div>
          <div className="poster"></div>
          <div className="form">
            <h2>Are You a ..</h2>
            <form action="/action_page.php">
              <div id="country" value="country">
                <h3 value="select">Select</h3>
                <Link
                  value="Nepal"
                  id="next1"
                  to="/app/partner/selection/school"
                >
                  {" "}
                  School Student
                </Link>
                <br />{" "}
                <Link
                  value="China"
                  id="next2"
                  to="/app/partner/selection/college"
                >
                  College Student
                </Link>
                <br />{" "}
                <Link
                  value="Japan"
                  id="next3"
                  to="/app/partner/selection/employee"
                >
                  Employee
                </Link>
              </div>
            </form>

            {/* <Link to="" id='next'>Next&#62;</Link>
<Link  to="" id='back'>&#60;Back </Link> */}
          </div>
        </section>
        <div className="circle"></div>
      </div>
    </>
  );
}
export default Selection;
