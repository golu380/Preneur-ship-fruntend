import "./../css/Investor-Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
import React from "react";
import getPortfolio from "../../utils/getPortfolio";
// import p from "./../images/p.png";

const IPortfolio = () => {
  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"));
  const [
    EntrepreneurPortfolioPutData,
    { isLoading },
  ] = useEntrepreneurPortfolioPutDataMutation();

  const [EntrepreneurPortfolioData, setEntrepreneurPortfolioData] = useState({
    owership: "",
    dil_equity: "",
    ls_equity_members: "",
    open_to_investors: false,
    open_to_partners: false,
  });

  // load portfolio data

  React.useEffect(() => {
    getPortfolio().then((data) => {
      const d = data[0];
      if (d) {
        console.log("Portfolio Data", d);
        const {
          owership,
          dil_equity,
          ls_equity_members,
          open_to_investors,
          open_to_partners,
        } = d;
        setEntrepreneurPortfolioData({
          owership: owership,
          dil_equity: dil_equity,
          ls_equity_members: ls_equity_members,
          open_to_investors: open_to_investors,
          open_to_partners: open_to_partners,
        });
      }
    });
  }, []);

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
      owership: EntrepreneurPortfolioData.owership,
      dil_equity: EntrepreneurPortfolioData.dil_equity,
      ls_equity_members: EntrepreneurPortfolioData.ls_equity_members,
      open_to_investors: EntrepreneurPortfolioData.open_to_investors,
      open_to_partners: EntrepreneurPortfolioData.open_to_partners,
    };
    const EntrepreneurPortfolioData_id = localStorage.getItem(
      "entrepreneurPortfolio_id"
    );
    console.log("Data passed to the put:", actualData);
    const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
    console.log("Response of portfolio PUT request:", responseOfPortfolioPUT);
  };

  console.log(EntrepreneurPortfolioData.open_to_investors);

  return (
    <>
      {/* <div className="E-E12-navbar2"> */}
      {/* <Link to="/investor-home"><img src={h}className="E-E12-s" href="" alt="" /></Link> 
   <Link to="/investor-profile"><img src={c} className="E-E12-t" alt=""/></Link> 
   <Link to="/release"><img src={p} className="E-E12-v"  alt=""/></Link> 
    <Link to="/investor-setting"><img src={s} className="E-E12-u" alt=""/></Link> */}

      {/* </div> */}
      <div className="E-E12-container1">
        <div className="E-E12-navbar"></div>
        <div className="E-E12-circle1"></div>
        <div className="E-E12-circle2"></div>
        <div className="E-E12-circle3"></div>

        <span>
          <img src="./logo512.png" alt="" />
        </span>
      </div>

      <div className="E-E12-box2">
        <input
          type="text"
          name="owership"
          onChange={handleChange}
          placeholder="Ownership"
          id=""
          value={EntrepreneurPortfolioData.owership}
        />{" "}
        <br />
        <input
          type="text"
          name="dil_equity"
          onChange={handleChange}
          placeholder="Dilution equity"
          id=""
          value={EntrepreneurPortfolioData.dil_equity}
        />{" "}
        <br />
        <input
          type="text"
          name="ls_equity_members"
          onChange={handleChange}
          placeholder="Equity owners"
          id=""
          value={EntrepreneurPortfolioData.ls_equity_members}
        />{" "}
        <br />
        {/* <Link className="E-E12-btn1"  type="submit" href="./release">Next &#62;</Link> */}
      </div>
      {/* add two toggles 
  1 option --->open to investors 
   2 option --->open to partners */}
      <input
        type="checkbox"
        id="investors"
        name="open_to_investors"
        onChange={() => {
          setEntrepreneurPortfolioData((prevData) => ({
            ...prevData,
            open_to_investors: !EntrepreneurPortfolioData.open_to_investors,
          }));
        }}
        className="E-E12-btn2"
        checked={EntrepreneurPortfolioData.open_to_investors}
      ></input>
      <label>Open to Investors</label>
      <br />
      <br />
      <input
        type="checkbox"
        id="partners"
        name="open_to_partners"
        onChange={() => {
          setEntrepreneurPortfolioData((prevData) => ({
            ...prevData,
            open_to_partners: !EntrepreneurPortfolioData.open_to_partners,
          }));
        }}
        className="E-E12-btn2"
        checked={EntrepreneurPortfolioData.open_to_partners}
      ></input>
      <label>Open to Partners</label>
      <br />
      <br />
      <Link
        className="E-E12-btn2"
        onClick={submit}
        type="submit"
        to="/app/enterpreneur/portfolio/success"
      >
        {" "}
        Save
      </Link>
    </>
  );
};
export default IPortfolio;
