import React from "react";
import "./audience.css";
import { Link } from "react-router-dom";
function Employee() {
  const [company, setCompany] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [prior_edu, setPriorEdu] = React.useState("");

  const handleSubmission = () => {
    console.log("Submitting form");
  };

  const back = () => {
    window.location.href = "/app/single/selection";
  };
  return (
    <>
      <div className="college-page">
        <div className="college-page-container">
          <div className="college-form">
            <div className="form__control">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                name="course"
                id="course"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="specification">Specification</label>
              <input
                type="text"
                name="specification"
                id="specification"
                value={designation}
                onChange={(e) => {
                  setDesignation(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="institute">Institute</label>
              <input
                type="text"
                name="institute"
                id="institute"
                value={prior_edu}
                onChange={(e) => {
                  setPriorEdu(e.target.value);
                }}
              />
            </div>

            <div className="form__submitter">
              <button
                className={`proceed_btn ${
                  !company || !designation || !prior_edu ? "disabled" : ""
                }`}
                disabled={!company || !designation || !prior_edu ? true : false}
                onClick={handleSubmission}
              >
                Proceed
              </button>
              <button className="back_btn">Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Employee;
