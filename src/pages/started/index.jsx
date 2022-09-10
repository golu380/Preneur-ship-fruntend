import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function AccountType() {
  return (
    <div>
      <div className="account_selector">
        <Link to="/app/investor/login">
          <button>
            <p>Investor</p>
          </button>
        </Link>
        <Link to="/app/partner/login">
          <button>
            <p>Partner</p>
          </button>
        </Link>
        <Link to="/app/entreprenaur/login">
          <button>
            <p>Enterprenaur</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AccountType;
