import React from "react";
import "./audience.css";
import { Link } from "react-router-dom";
import saveSchool from "../../../utils/saveSchool";
function SchoolStudent() {
  const [current_qualification, setCurrentQualification] = React.useState("");
  const [qualification_status, setQualificationStatus] = React.useState("");
  const [InstituteName, setInstituteName] = React.useState("");

  console.log(current_qualification);

  const handleSubmission = () => {
    if (current_qualification && qualification_status && InstituteName) {
      saveSchool(
        current_qualification,
        qualification_status,
        InstituteName
      ).then((res) => {
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
                value={current_qualification}
                onChange={(e) => {
                  setCurrentQualification(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="specification">Specification</label>
              <input
                type="text"
                name="specification"
                id="specification"
                value={qualification_status}
                onChange={(e) => {
                  setQualificationStatus(e.target.value);
                }}
              />
            </div>
            <div className="form__control">
              <label htmlFor="institute">Institute</label>
              <input
                type="text"
                name="institute"
                id="institute"
                value={InstituteName}
                onChange={(e) => {
                  setInstituteName(e.target.value);
                }}
              />
            </div>

            <div className="form__submitter">
              <button
                className={`proceed_btn ${
                  !current_qualification ||
                  !InstituteName ||
                  !qualification_status
                    ? "disabled"
                    : ""
                }`}
                disabled={
                  !current_qualification ||
                  !InstituteName ||
                  !qualification_status
                    ? true
                    : false
                }
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
export default SchoolStudent;
