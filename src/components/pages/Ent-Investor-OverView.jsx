import "./../css/Investor-OverView.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEntrepreneurPortfolioPutDataMutation } from "../../services/userAuthApi";
// import h from "./../images/h.png";
// import c from "./../images/c.png";
// import s from "./../images/s.png";
import React from "react";
import getPortfolio from "../../utils/getPortfolio";
// import p from "./../images/p.png";

const IOverView = () => {
  const entData = JSON.parse(localStorage.getItem("EntrepreneurPortfolioData"));
  const [loaded, setLoaded] = useState(false);
  const [
    EntrepreneurPortfolioPutData,
    { isLoading },
  ] = useEntrepreneurPortfolioPutDataMutation();

  const [valuation, setValuation] = useState("");
  const [sales, setSales] = useState("");
  const [margin, setMargin] = useState("");
  const [profit_month, setProfit_month] = useState("");
  const [profit_year, setProfit_year] = useState("");

  // load portfolio data

  React.useEffect(() => {
    getPortfolio().then((data) => {
      if (data) {
        console.log("Portfolio Data", data);

        const { valuation, sales, profit_year, profit_month, margin } = data[0];

        console.log(valuation);

        setValuation(valuation);
        setSales(sales);
        setMargin(margin);
        setProfit_month(profit_month);
        setProfit_year(profit_year);
        setLoaded(true);
      }
    });
  }, [loaded]);

  const submit = () => {
    localStorage.setItem(
      "EntrepreneurPortfolioData",
      JSON.stringify({
        valuation,
        sales,
        profit_month,
        profit_year,
        margin,
      })
    );
    const actualData = {
      valuation: valuation,
      sales: sales,
      margin: margin,
      profit_month: profit_month,
      profit_year: profit_year,
    };
    const EntrepreneurPortfolioData_id = localStorage.getItem(
      "entrepreneurPortfolio_id"
    );
    console.log("Data passed to the put:", actualData);
    const responseOfPortfolioPUT = EntrepreneurPortfolioPutData(actualData);
    console.log("Response of portfolio PUT request:", responseOfPortfolioPUT);
  };

  return (
    <>
      <div className="E-11-container1">
        <div className="E-11-navbar">
          <span>
            <img src="./logo512.png" alt="" />
          </span>
        </div>
        <div className="E-11-circle1"></div>
        <div className="E-11-circle2"></div>
        <div className="E-11-circle3"></div>
      </div>

      <div className="E-11-box2">
        <input
          type="text"
          name="valuation"
          onChange={(e) => setValuation(e.target.value)}
          placeholder="Company Valuation"
          id=""
          value={valuation}
        />{" "}
        <br />
        <input
          type="text"
          name="margin"
          onChange={(e) => setMargin(e.target.value)}
          placeholder="Gross Margin"
          id=""
          value={margin}
        />{" "}
        <br />
        <input
          type="text"
          name="profit_month"
          onChange={(e) => setProfit_year(e.target.value)}
          placeholder="Profit In A Month"
          id=""
          value={profit_month}
        />{" "}
        <br />
        <input
          type="text"
          name="profit_year"
          onChange={(e) => setProfit_year(e.target.value)}
          placeholder="Profit In A Year"
          id=""
          value={profit_year}
        />{" "}
        <br />
        <input
          type="text"
          name="sales"
          onChange={(e) => setSales(e.target.value)}
          placeholder="Company Sales"
          id=""
          value={sales}
        />{" "}
        <br />
        <Link
          className="E-11-btn1"
          onClick={submit}
          type="submit"
          to="/app/enterpreneur/portfolio/details"
        >
          {" "}
          Next &#62;
        </Link>
      </div>
    </>
  );
};

export default IOverView;
