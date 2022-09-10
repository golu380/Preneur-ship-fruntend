import "./../css/Buddy-Profile.css";
import { Link } from "react-router-dom";
import React from "react";
import getFileSize from "../../utils/getFileSize";
import getBuddyProfile from "../../utils/getBuddyProfile";
import uploadLogo from "../../utils/uploadLogo";
// import l from "./../images/product-images.jpg";
const BProfile = () => {
  const [company_name, setCompanyName] = React.useState("");
  const [company_docs, setCompanyDocs] = React.useState("");
  const [aadhar, setAadhar] = React.useState("");
  const [pan, setPan] = React.useState("");
  const [voterId, setVoterId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [pitch, setPitch] = React.useState("");
  const [selfie, setSelfie] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [loaded, setLoaded] = React.useState(false);
  //load buddy data

  React.useEffect(() => {
    getBuddyProfile().then((d) => {
      let data = d[0];
      if (data) {
        const {
          companyname,
          companydocs,
          aadhar,
          Voterid,
          Pancard,
          title,
          selfie,
          profile,
          pitch,
          desc,
        } = data;

        setCompanyName(companyname);
        setCompanyDocs(companydocs);
        setAadhar(aadhar);
        setPan(Pancard);
        setVoterId(Voterid);
        setTitle(title);
        setDescription(desc);
        setPitch(pitch);
        setSelfie(selfie);
        setLogo(profile);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded) {
    return null;
  }

  // handle logo upload

  const handleLogo = (e) => {
    const file = e.target.files[0];
    const allowedExtension = ["image/jpg", "image/png", "image/jpeg"];
    if (file) {
      const { type, size } = file;
      if (!allowedExtension.includes(type)) {
        alert("Please upload a valid image file");
        return;
      }

      const file_size = getFileSize(size);
      if (file_size > 1.5) {
        alert("File size is too large");
        return;
      }

      // now you can upload file to firebase

      uploadLogo(file, company_name, setLogo);
    }
  };
  return (
    <>
      {/* <div className="E-13-navbar2">
        <Link to="/buddy-home"><img src={h}className="E-11-s" alt="" /></Link> 
   <Link to="/buddy-profile">  <img src={c} className="E-11-t" alt=""/></Link> 
    <Link to="/buddy-setting"> <img src={s} className="E-11-u" alt=""/></Link>
        
  
    
    </div> */}
      <div className="E-13-container1">
        <div className="E-13-navbar">
          {/* {logo && <img src={logo} alt="" />} */}
          <span>
            <h5>{title}</h5>
            <p>{company_name}</p>
          </span>{" "}
        </div>
      </div>

      <div className="E-13-box2">
        <label htmlFor="logo" className="company_logo">
          <input type="file" name="logo" id="logo" onChange={handleLogo} />
          <img
            src={
              logo
                ? logo
                : "https://avatars.dicebear.com/api/adventurer/default.svg"
            }
            alt=""
          />
        </label>
        <h2>My profile</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Company name"
          value={company_name}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Company documents"
          value={company_docs}
          readOnly={company_docs && company_docs}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Adhar card"
          value={aadhar}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Pan card"
          value={pan}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Voter ID card"
          value={voterId}
        />{" "}
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="product description"
          value={description}
        />{" "}
        <br />
        <input type="text" name="" id="" placeholder="Pitch" /> <br />
        {/* <div className="E-13-product-section">
        <label for="">Images</label> <br/>

        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>
        <span><img src={l} alt=""/></span>+ <br/>

      </div> */}
        <Link
          to="/app/entrepreneur/partners/home"
          className="E-13-btn1"
          type="submit"
        >
          {" "}
          Update
        </Link>
        <Link
          to="/app/entrepreneur/partners/home"
          className="E-13-btn2"
          type="submit"
        >
          {" "}
          Back
        </Link>
        {/* <Link to="./buddy-account-type-change"  className="E-13-btn3" type="submit"> Change Account Type</Link> */}
      </div>
    </>
  );
};

export default BProfile;
