import "./../css/Release.css";
import { Link } from "react-router-dom";
import e from "./../images/img3.jpg";
import { useState } from "react";
import React from "react";
import { useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
const Release = () => {
  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"));
  const [
    EntrepreneurPortfolioPutData,
    { isLoading },
  ] = useEntrepreneurPortfolioPutDataMutation();

  const [EntrepreneurPortfolioData, setEntrepreneurPortfolioData] = useState({
    profile: "",
    name_own: entData.name_own,
    comp_email: entData.comp_email,
    comp_contact: entData.comp_contact,
    companyname: entData.companyname,
    desc: entData.desc,
    pitch: entData.pitch,
    valuation: entData.valuation,
    sales: entData.sales,
    margin: entData.margin,
    profit_month: entData.profit_month,
    profit_year: entData.profit_year,
    owership: entData.owership,
    dil_equity: entData.dil_equity,
    ls_equity: entData.ls_equity,
    open_to_investors: false,
    open_to_partners: false,
    price_release: "",
    ready: false,
  });

  const handleChange = (e) => {
    setEntrepreneurPortfolioData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log(EntrepreneurPortfolioData);
    // setDemoState((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  };

  async function submit() {
    localStorage.setItem(
      "EntrepreneurPortfolioData",
      JSON.stringify(EntrepreneurPortfolioData)
    );
    const actualData = {
      price_release: EntrepreneurPortfolioData.price_release,
      ready: true,
    };
    console.log(actualData);
    // const EntrepreneurPortfolioData_id = localStorage.getItem("entrepreneurPortfolio_id");
    console.log("Data passed to the put:", actualData);
    const responseOfPortfolioPUT = await EntrepreneurPortfolioPutData(
      actualData
    );
    console.log("Response of portfolio PUT request:", responseOfPortfolioPUT);
  }

  return (
    <>
      <div className="E-R-container1">
        <div className="E-R-circle1"></div>
        <div className="E-R-circle2"></div>
        <div className="E-R-main-box">
          <div className="E-R-box1">
            <h2>
              Ready To Release Equity <br />
              For &#8377;{" "}
            </h2>
            <input name="price_release" onChange={handleChange}></input>
            <br /> <br /> <br /> <br /> <br /> <br />
            {/* <p>Looking for a buddy?</p> */}
            <Link
              to="/app/enterpreneur/final-success"
              onClick={submit}
              className="E-R-btn1"
              type="submit"
            >
              YES
            </Link>
            <Link
              to="/app/entrepreneur/partners/home"
              className="E-R-btn1"
              type="submit"
            >
              NO
            </Link>
          </div>
          <div className="E-R-box2">
            <img src={e} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Release;

/* <img src="./h.png" className="E-R-s" alt="" />
    <img src="./c.png" className="E-R-t" alt="" />
    <img src="./s.png" className="E-R-u" alt="" />
  </div>


  <div className="E-R-container">
    <div className="E-R-circle1"></div>
    <div className="E-R-circle2"></div>
    <div className="E-R-box1">
      <img src="" alt="" />
      <h3>Preneurship</h3>

      <div className="E-R-box2">
        <h3>Settings</h3>
        <input type="text" name="" id="" placeholder="Contact us"/> <br/>
        <input type="text" name="" id="" placeholder="Change language"/> <br />
        <input type="text" name="" id="" placeholder="Payments"/> <br/>
         <Link href="./eleven" className="E-R-btn" type="submit">Next &#62;</Link>
      </div>
    </div> */
