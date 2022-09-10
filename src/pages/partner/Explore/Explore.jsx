import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import getSchool from "../../../utils/getSchool";
import getCompanies from "../../../utils/getCompanies";

function CompanyViewModal({ setModal, modal }) {
  const handleClose = (e) => {
    const targetClass = e.target.className;
    if (targetClass === "company_modal") {
      setModal(false);
    }
  };
  return (
    <div className="company_modal" onClick={handleClose}>
      <div className="company_detail_view">
        <div className="company_detail_view_header">
          <h3>{modal.companyname}</h3>
        </div>
        <div
          className="company__logo"
          style={{
            backgroundImage: `url(${modal.profile})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="company_view_body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            animi esse. Perferendis sit officia in ex nihil quibusdam optio
            cupiditate vero, quidem, recusandae praesentium accusamus dolores
            soluta numquam maxime quae.
          </p>
          <p>
            Perferendis, itaque sequi quisquam vel suscipit ad sunt architecto
            sapiente quaerat unde possimus labore, atque qui nesciunt soluta
            dicta, similique autem rem. Odit dicta neque, consequuntur ipsa eos
            amet quam.
          </p>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [tab, setTab] = React.useState(0);
  const [data, setData] = React.useState(null);
  const [companies, setCompanies] = React.useState(null);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    getSchool()
      .then((d) => {
        console.log(d);
        const { data } = d;
        setData(data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    getCompanies().then((cmp) => {
      console.log(cmp);
      setCompanies(cmp);
    });
  }, [tab]);

  console.log(data, companies);
  return (
    <>
      <div className="Explore">
        <header>
          <div className="header-wrapper">
            <div className="explore_searchbar">
              <input
                type="text"
                name="key"
                id="key"
                placeholder="Search Firm"
              />
            </div>
          </div>
        </header>

        {tab === 0 && (
          <section className="companies">
            {companies &&
              companies.map((cmp, i) => {
                console.log(cmp);
                return (
                  <div className="company_card" key={i}>
                    <div className="company_card_body">
                      <h3>
                        {cmp.companyname ? cmp.companyname : "Not Defined"}
                      </h3>
                      <p>{cmp.desc ? cmp.desc : "Description Unavialable"}</p>
                      <a
                        href="#more"
                        onClick={() => {
                          setModal(companies[i]);
                        }}
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                );
              })}
          </section>
        )}

        {tab === 1 && data && (
          <div className="user_profile_section">
            <div
              className="user__avatar"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div className="user__form">
              <div className="form__control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={data.name} />
              </div>
              <div className="form__control">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={data.Email} />
              </div>
              <div className="form__control">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={data.mob_no}
                />
              </div>
            </div>
          </div>
        )}

        <div className="user_controls">
          <button onClick={() => setTab(0)}>
            <AiOutlineHome />
          </button>
          <button onClick={() => setTab(1)}>
            <FaRegUserCircle />
          </button>
          <button onClick={() => setTab(2)}>
            <FiSettings />
          </button>
        </div>
        {modal && <CompanyViewModal setModal={setModal} modal={modal} />}
      </div>
    </>
  );
}
export default App;
