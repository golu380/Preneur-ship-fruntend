import "./../css/Buddy.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import getFileSize from "../../utils/getFileSize";
import uploadDoc from "../../utils/uploadDoc";

const Buddy = () => {
  const data = JSON.parse(localStorage.getItem("entrepreneur_data"));
  // console.log(data);
  // console.log(data.owner);
  // console.log(data.date);
  // console.log(data.number);

  // const [image, setImage] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [entrepreneurData, setEntrepreneurData] = useState({
    title: data.title,
    date: data.date,
    number: data.number,
    companyname: "",
    desc: "",
    pitch: "",
    aadhar: "",
    Pancard: "",
    Voterid: "",
    selfie: "",
  });

  const [companyDocs, setCompanyDocs] = useState(null);

  const handleChange = (e) => {
    setEntrepreneurData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // const filedatachange = (e)=>{
  //   const reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   console.log(reader.result)
  //   setEntrepreneurData((prevData)=>({...prevData,[e.target.name]:reader.result}));

  // }
  const handleFilesubmit = (e) => {
    // make sure we have company name

    if (entrepreneurData.companyname === "") {
      alert("Please enter company name");
      return;
    }

    const file = e.target.files[0];
    const { type, size } = file;
    const allowedExtensions = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
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

      uploadDoc(
        file,
        entrepreneurData.companyname,
        setCompanyDocs,
        setUploaded
      );
    }
  };

  const submit = () => {
    localStorage.setItem(
      "entrepreneur_data",
      JSON.stringify({
        ...entrepreneurData,
        companydocs: companyDocs,
      })
    );
  };

  return (
    <>
      <div className="E-2-container1">
        <h3>Just a few more steps!</h3>
        <div className="E-2-navbar"></div>
        <div className="E-2-circle1"></div>
        <div className="E-2-circle2"></div>
        <div className="E-2-circle3"></div>
        <div className="E-2-sidebar"></div>
        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-2-box2">
        <input
          type="text"
          name="companyname"
          onChange={handleChange}
          placeholder="Company name"
          value={entrepreneurData.companyname}
        />{" "}
        <br />
        {/* <input type="text" name="" id="" placeholder="Upload"> <br>  */}
        {/* <input type="file" name="upload" accept="application/pdf"  placeholder="Company name"/> */}
        {!uploaded ? (
          <input type="file" name="companydocs" onChange={handleFilesubmit} />
        ) : (
          <p className="file_upload_flag">File Uploaded</p>
        )}
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="Description"
        />{" "}
        <br />
        <input
          type="text"
          name="pitch"
          onChange={handleChange}
          placeholder="Add pitch"
        />{" "}
        <br />
        <Link
          className="E-2-btn1"
          type="submit"
          onClick={submit}
          to="/app/entrepreneur/partners/verification"
        >
          Next &#62;
        </Link>
        <br />
      </div>
    </>
  );
};

export default Buddy;
