// eslint-disable-next-lin
import "./../css/Buddy-Verification.css";
import { Link } from "react-router-dom";
import s from "./../images/success icon.png";
// import i from "./../css/id card.png"
import i from "./../images/id card.png";
import p from "./../images/icons8-camera-24.png";
import l from "./../images/img3.jpg";
import { useState } from "react";
import React from "react";
import Axios from "axios";
import { useEntrepreneurWelcomeMutation } from "../../services/userAuthApi";
import getFileSize from "../../utils/getFileSize";
import uploadVerificationDoc from "../../utils/uploadVerificationDoc";
const BVerify = () => {
  const data = JSON.parse(localStorage.getItem("entrepreneur_data"));
  const [
    postEntrepreneurData,
    { isLoading },
  ] = useEntrepreneurWelcomeMutation();

  const [entrepreneurData, setEntrepreneurData] = useState({
    title: data.title,
    date: data.date,
    number: data.number,
    companyname: data.companyname,
    companydocs: data.companydocs,
    desc: data.desc,
    pitch: data.pitch,
  });

  const [aadhar, setAdhaar] = React.useState("");
  const [Pancard, setPan] = React.useState("");
  const [Voterid, setVoterId] = React.useState("");
  const [selfie, setSelfie] = React.useState("");

  const handleFilesubmit = (e, setFile) => {
    const file = e.target.files[0];
    const { type, size } = file;
    const allowedExtensions = ["image/jpeg", "image/jpg", "image/png"];

    const file_size = getFileSize(size);

    if (file) {
      if (!allowedExtensions.includes(type)) {
        alert("Please upload a valid file");
        return;
      }
      if (file_size > 1.2) {
        alert("File size is too large");
        return;
      }

      // now you can upload file to firebase

      uploadVerificationDoc(file, entrepreneurData.companyname, setFile);
    }
  };

  const submit = async () => {
    localStorage.setItem(
      "entrepreneur_data",
      JSON.stringify({
        ...entrepreneurData,
        aadhar,
        Pancard,
        Voterid,
        selfie,
      })
    );
    const access_token = localStorage.getItem("access_token");
    const formdata = JSON.parse(localStorage.getItem("entrepreneur_data"));
    console.log(access_token);
    const res = await postEntrepreneurData(formdata);
    console.log(res);
    localStorage.setItem("eid", res.data.id);

    // const url = "http://127.0.0.1:8000/api/verification/";
    // Axios.post(url,entrepreneurData,access_token).then((res)=>{console.log(res)})
  };

  return (
    <>
      <div className="container1">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="main-box">
          <div className="box1">
            <h2>
              Its time to verify! <img src={s} alt="" />{" "}
            </h2>
            <label for="">
              {" "}
              <img src={i} alt="" /> Aadhar card <span>*</span>
            </label>{" "}
            <br />
            <input
              type="file"
              name="aadhar"
              onChange={(e) => handleFilesubmit(e, setAdhaar)}
            />
            <label for="">
              {" "}
              <img src={i} alt="" /> Pan card
            </label>{" "}
            <br />
            <input
              type="file"
              name="Pancard"
              onChange={(e) => handleFilesubmit(e, setPan)}
            />
            <label for="">
              {" "}
              <img src={i} alt="" /> Voter ID card
            </label>{" "}
            <br />
            <input
              type="file"
              name="Voterid"
              onChange={(e) => handleFilesubmit(e, setVoterId)}
            />
            <label for="">
              {" "}
              <img src={p} alt="" /> Instant picture <span>*</span>
            </label>{" "}
            <br />
            <input
              type="file"
              name="selfie"
              onChange={(e) => handleFilesubmit(e, setSelfie)}
            />
            <Link
              to="/app/entrepreneur/partners/success"
              className="btn1"
              type="submit"
              onClick={submit}
            >
              Next &#62;
            </Link>
          </div>
          <div className="box2">
            <img src={l} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BVerify;
