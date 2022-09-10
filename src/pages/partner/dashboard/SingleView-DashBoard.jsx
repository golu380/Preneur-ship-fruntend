import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import uploadProfilePhoto from "../../../utils/uploadPartnerPhoto";
import getFileSize from "../../../utils/getFileSize";
import savePartnerProfile from "../../../utils/savePartnerProfile";
function DashBoard() {
  const [photo, setPhoto] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [name, setName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const { type, size } = file;
      const allowedExtensions = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedExtensions.includes(type)) {
        alert("Please upload a valid image");
        return;
      }
      if (getFileSize(size) > 1.2) {
        alert("File size is too large");
        return;
      }

      uploadProfilePhoto(file, localStorage.getItem("id"), setPhoto);
    }
  };

  const handleProfileSubmission = () => {
    if (photo && skills && name && bio && email && phone) {
      savePartnerProfile(photo, email, name, bio, skills, phone)
        .then((res) => {
          console.log(res);
          if (res) {
            window.location.href = "/app/single/explore";
          }
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      <div className="dash">
        <div className="nav">
          <div className="quarter"> </div>
        </div>
        <br />
        <div className="mobile_info">
          <label
            htmlFor="avatar1"
            className="user_photo_input"
            style={{
              backgroundImage: `url(${
                photo
                  ? photo
                  : "https://cultureamp.design/static/a489d86dba895745f93a8d1268fe713f/avatar.svg"
              })`,
            }}
          >
            <input type="file" name="avatar1" id="avatar1" />
          </label>

          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />
          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />
          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />
          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />
          <input
            className="mob_skill"
            type="text"
            placeholder="+ Add Your Skills"
          />

          <p className="mob_Bio"></p>
          <input
            className="paragraph"
            type="text"
            placeholder="Add your Bio..."
          />
          <Link to="/single-view-Success" id="mobile_button">
            Let's Go
          </Link>
        </div>

        <div className="info">
          <label
            htmlFor="avatar"
            className="user_photo_input"
            style={{
              backgroundImage: `url(${
                photo
                  ? photo
                  : "https://cultureamp.design/static/a489d86dba895745f93a8d1268fe713f/avatar.svg"
              })`,
            }}
          >
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={handlePhotoUpload}
            />
          </label>

          <input
            className="bio"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="bio"
            placeholder="Email"
            title="ADD"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bio"
            placeholder="Phone"
            title="ADD"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="bio"
            placeholder="Add Bio"
            title="ADD"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            className="skills"
            placeholder=" + Add Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          {/* <Link to="/single-view-Success" className="confirm">
            Confirm &#62;
          </Link> */}

          <button
            className={`confirm_btn ${!name ||
              !email ||
              !photo ||
              !phone ||
              !skills ||
              !bio ||
              "confirm_btn"}`}
            onClick={handleProfileSubmission}
          >
            Confirm
          </button>
          <br />
          {/* <Link to='' className='back'> &#60;Back  </Link> */}
          {/* <div className='dot_side'> </div>
                    <div className='quarter_side'></div> */}
        </div>
        <div className="dot_side"> </div>
        <div className="quarter_side"></div>
      </div>
    </>
  );
}
export default DashBoard;
