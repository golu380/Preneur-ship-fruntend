import React from "react";
import "./audience.css";
import { Link } from "react-router-dom";
import saveCollege from "../../../utils/saveCollege";
function College() {
  const [course, setCourse] = React.useState("");
  const [specification, setSpecification] = React.useState("");
  const [institute, setInstitute] = React.useState("");
  const [prior_edu, setPriorEdu] = React.useState("");

  const handleCollegeSubmission = () => {
    console.log("Submitting form");
    if (course && specification && institute && prior_edu) {
      saveCollege(course, specification, institute, prior_edu).then((res) => {
        console.log(res);
        if (res) {
          window.location.href = "/app/partner/dashboard";
        }
      });
    }
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
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="specification">Specification</label>
              <input
                type="text"
                name="specification"
                id="specification"
                value={specification}
                onChange={(e) => {
                  setSpecification(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="institute">Institute</label>
              <input
                type="text"
                name="institute"
                id="institute"
                value={institute}
                onChange={(e) => {
                  setInstitute(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="prior_edu">Prior Education</label>
              <input
                type="text"
                name="prior_edu"
                id="prior_edu"
                value={prior_edu}
                onChange={(e) => {
                  setPriorEdu(e.target.value);
                }}
              />
            </div>
            <div className="form__submitter">
              <button
                className={`proceed_btn ${
                  !course || !specification || !institute || !prior_edu
                    ? "disabled"
                    : ""
                }`}
                disabled={
                  !course || !specification || !institute || !prior_edu
                    ? true
                    : false
                }
                onClick={handleCollegeSubmission}
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
export default College;
