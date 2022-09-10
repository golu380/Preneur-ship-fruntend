import "./../css/Investor.css";
import { Link } from "react-router-dom";
import {
  useEntrepreneurPortfolioGetDataQuery,
  useEntrepreneurPortfolioPostDataMutation,
  useEntrepreneurPortfolioPutDataMutation,
} from "../../services/userAuthApi";
import c from "./../images/add profile.jpg";
import { useState, useEffect } from "react";
import React from "react";
import { ConstructionSharp } from "@mui/icons-material";
import axios from "axios";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage();
function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

const Investor = () => {
  const [
    EntrepreneurPortfolioPostData,
  ] = useEntrepreneurPortfolioPostDataMutation();
  const [
    EntrepreneurPortfolioPutData,
  ] = useEntrepreneurPortfolioPutDataMutation();

  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"));

  // console.log(entData)
  const access_token = localStorage.getItem("access_token");
  const emptyData = {};

  // localStorage.setItem("entrepreneurPortfolio_id",res.data.id);

  // const {data,isSuccess} = useEntrepreneurPortfolioGetDataQuery(access_token);

  // console.log("response of getdata",data)
  // const  settingData = ()=>{
  //         localStorage.setItem("entrepreneurPortfolio_id",data[0].id)
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["profile"]:data[0].profile}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["companyname"]:data[0].companyname}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["pitch"]:data[0].pitch}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["desc"]:data[0].desc}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["name_own"]:data[0].name_own}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["comp_email"]:data[0].comp_email}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["comp_contact"]:data[0].comp_contact}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["valuation"]:data[0].valuation}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["sales"]:data[0].sales}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["margin"]:data[0].margin}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["profit_month"]:data[0].profit_month}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["profit_year"]:data[0].profit_year}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["owership"]:data[0].owership}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["dil_equity"]:data[0].dil_equity}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["ls_equity"]:data[0].ls_equity}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["open_to_investors"]:data[0].open_to_investors}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["open_to_partners"]:data[0].open_to_partners}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["price_release"]:data[0].price_release}));
  //         setEntrepreneurPortfolioData((prevState)=>({...prevState,["ready"]:data[0].ready}));

  // }

  async function getdata() {
    const res = EntrepreneurPortfolioPostData(emptyData);
    console.log("response of post request is ", res);
    axios({
      method: "get",
      url: `https://10doshi12.pythonanywhere.com/api/portfolio/`,
      headers: {
        Authorization: `Token ${access_token}`,
      },
    }).then((response) => {
      console.log("response of get request of portfolio is ", response);

      localStorage.setItem("entrepreneurPortfolio_id", response.data[0].id);
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["profile"]: response.data[0].profile,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["companyname"]: response.data[0].companyname,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["pitch"]: response.data[0].pitch,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["desc"]: response.data[0].desc,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["name_own"]: response.data[0].name_own,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["comp_email"]: response.data[0].comp_email,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["comp_contact"]: response.data[0].comp_contact,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["valuation"]: response.data[0].valuation,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["sales"]: response.data[0].sales,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["margin"]: response.data[0].margin,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["profit_month"]: response.data[0].profit_month,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["profit_year"]: response.data[0].profit_year,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["owership"]: response.data[0].owership,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["dil_equity"]: response.data[0].dil_equity,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["ls_equity"]: response.data[0].ls_equity,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["open_to_investors"]: response.data[0].open_to_investors,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["open_to_partners"]: response.data[0].open_to_partners,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["price_release"]: response.data[0].price_release,
      }));
      setEntrepreneurPortfolioData((prevState) => ({
        ...prevState,
        ["ready"]: response.data[0].ready,
      }));
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  //   setTimeout(settingData,2000)
  const entrepreneurPortfolio_id = localStorage.getItem(
    "entrepreneurPortfolio_id"
  );

  // const [EntrepreneurPortfolioPostData,setEntrepreneurPortfolioPostData]= useEntrepreneurPortfolioPostDataMutation();
  // const [EntrepreneurPortfolioPuttData,setEntrepreneurPortfolioPutData]= useEntrepreneurPortfolioPutDataMutation();
  // const [EntreprenurInvestor,{isLoading}]= useUpdateEntrepreneurDataMutation();

  const [EntrepreneurPortfolioData, setEntrepreneurPortfolioData] = useState({
    profile: "",
    name_own: "",
    comp_email: "",
    comp_contact: "",
    companyname: "",
    desc: "",
    pitch: "",
    valuation: "",
    sales: "",
    margin: "",
    profit_month: "",
    profit_year: "",
    owership: "",
    dil_equity: "",
    ls_equity: "",
    open_to_investors: false,
    open_to_partners: false,
    price_release: "",
    ready: false,
    photoReady: false,
  });
  // const [EntrepreneurPortfolioData,setEntrepreneurPortfolioData]= useState({
  // profile:"",
  // name_own:entData.name_own,
  // comp_email:entData.comp_email,
  // comp_contact:entData.comp_contact,
  // companyname:entData.companyname,
  // desc:entData.desc,
  // pitch:entData.pitch,
  // valuation:entData.valuation,
  // sales:entData.sales,
  // margin:entData.margin,
  // profit_month:entData.profit_month,
  // profit_year:entData.profit_year,
  // owership:entData.owership,
  // dil_equity:entData.dil_equity,
  // ls_equity:entData.ls_equity,
  // open_to_investors:false,
  // open_to_partners:false,
  // price_release:"",
  // ready:false

  // })

  const handleChange = (e) => {
    setEntrepreneurPortfolioData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(EntrepreneurPortfolioData);
    // setDemoState((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  };

  const submit = () => {
    localStorage.setItem(
      "EntrepreneurPortfolioData",
      JSON.stringify(EntrepreneurPortfolioData)
    );
    const actualData = {
      name_own: EntrepreneurPortfolioData.name_own,
      comp_email: EntrepreneurPortfolioData.comp_email,
      comp_contact: EntrepreneurPortfolioData.comp_contact,
      companyname: EntrepreneurPortfolioData.companyname,
      desc: EntrepreneurPortfolioData.desc,
      pitch: EntrepreneurPortfolioData.pitch,
      profile: EntrepreneurPortfolioData.profile,
    };
    const EntrepreneurPortfolioData_id = localStorage.getItem(
      "entrepreneurPortfolio_id"
    );
    console.log("Data passed to the put:", actualData);
    const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
    console.log("Response of portfolio PUT request:", responseOfPortfolioPUT);
  };

  // const handleFilesubmit = (e) => {
  //   const file = e.target.files[0];
  //   getBase64(file).then((base64) => {
  //     // localStorage["fileBaesd64"] = base64;
  //     // console.debug("file stored", base64);
  //     // setImage(base64);
  //     console.log(base64);
  //     setEntrepreneurPortfolioData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: base64,
  //     }));
  //     //   console.log(entrepreneurData.aadhar)
  //   });
  // };
  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };

  // if(data[0]){

  // }else{
  //     const emptyData ={

  //     }
  //     const res = await EntrepreneurPortfolioPostData(emptyData);
  //     console.log(res)
  // }

  const uploadLogo = (e) => {
    const file = e.target.files[0];
    const { type, size } = file;
    const allowedExtension = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedExtension.includes(type)) {
      alert("Please upload only png,jpg or jpeg file");
      return;
    }

    const sizeInMB = bytesToSize(size);
    if (sizeInMB > 1.5) {
      alert("File size is too large");
      return;
    }

    // upload to firebase
    uploadFile(file);
  };

  const uploadFile = (file) => {
    const storageRef = ref(storage, `photos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setEntrepreneurPortfolioData((prevData) => ({
            ...prevData,
            photoReady: true,
            profile: downloadURL,
          }));
        });
      }
    );
  };

  console.log(EntrepreneurPortfolioData);
  return (
    <>
      <div className="E-5-container1">
        <div className="E-5-navbar"></div>
        <div className="E-5-circle1"></div>
        <div className="E-5-circle2"></div>
        <div className="E-5-circle3"></div>
        <div className="E-5-sidebar"></div>
        {/* <span><img src={c} alt=""/></span> */}
        {/* <span><img src={EntrepreneurPortfolioData.profile} alt=""/></span> */}
      </div>

      <div className="E-5-box2">
        <h3 for="">Add details</h3> <br />
        <label htmlFor="profile" className="user_profile_input">
          <input
            type="file"
            name="profile"
            id="profile"
            onChange={uploadLogo}
          />
          <img
            src={
              EntrepreneurPortfolioData.profile
                ? EntrepreneurPortfolioData.profile
                : "https://avatars.dicebear.com/api/adventurer/sumitkumarbighaniya.svg"
            }
            alt="profile_photo"
          />
        </label>
        <label>Owner Name</label> <br />
        <input
          type="text"
          name="name_own"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.name_own
              ? EntrepreneurPortfolioData.name_own
              : " "
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="name_own" onChange={handleChange} id=""/> <br/> */}
        <label>Company Email</label> <br />
        <input
          type="text"
          name="comp_email"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.comp_email
              ? EntrepreneurPortfolioData.comp_email
              : " "
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="comp_email" onChange={handleChange}  id=""/> <br/> */}
        <label>Company Contact No.</label> <br />
        <input
          type="text"
          name="comp_contact"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.comp_contact
              ? EntrepreneurPortfolioData.comp_contact
              : ""
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="comp_contact"  onChange={handleChange}  id=""/> <br/> */}
        <label>Company Name</label> <br />
        <input
          type="text"
          name="companyname"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.companyname
              ? EntrepreneurPortfolioData.companyname
              : " "
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="companyname" onChange={handleChange}  id=""/> <br/> */}
        <label>Company Description</label> <br />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.desc ? EntrepreneurPortfolioData.desc : ""
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="desc" onChange={handleChange}  id=""/> <br/> */}
        <label>Company Pitch</label> <br />
        <input
          type="text"
          name="pitch"
          onChange={handleChange}
          value={
            EntrepreneurPortfolioData.pitch
              ? EntrepreneurPortfolioData.pitch
              : " "
          }
          id=""
        />{" "}
        <br />
        {/* <input type="text" name="pitch" onChange={handleChange} id=""/> <br/> */}
        <Link
          className="E-5-btn1"
          to="/app/enterpreneur/portfolio/overview"
          onClick={submit}
          type="submit"
          disabled={!EntrepreneurPortfolioData.photoReady}
        >
          Next &#62;
        </Link>
      </div>
    </>
  );
};

export default Investor;
