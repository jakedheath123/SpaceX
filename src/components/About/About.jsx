import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./About.css";
import elonImage from "../../images/elon.jpg";
import gwynneShotwellImage from "../../images/gwynneShotwell.jpg";
import tomMuellerImage from "../../images/tomMueller.jpg";
import { getCompanyInfo } from "../../actions";
import Loader from "../Loader/Loader";

const About = ({ getCompanyInfo, spaceXInfo }) => {
  useEffect(() => {
    getCompanyInfo();
  }, [getCompanyInfo]);

  if (!spaceXInfo) return <Loader />;

  const {
    name,
    founder,
    founded,
    employees,
    vehicles,
    launch_sites,
    ceo,
    coo,
    cto_propulsion,
    valuation,
    summary,
    headquarters: { address, city, state },
    links: { website, twitter, elon_twitter }
  } = spaceXInfo;

  return (
    <main className="about-container">
      <section className="about-box1">
        <h2>CEO and CTO</h2>
        <p>{ceo}</p>
        <img src={elonImage} alt="Elon Musk avatar" />
      </section>
      <section className="about-box2">
        <h2>COO</h2>
        <p>{coo}</p>
        <img src={gwynneShotwellImage} alt="Gwynne Shotwell avatar" />
      </section>
      <section className="about-box3">
        <h2>CTO Propulsion</h2>
        <p>{cto_propulsion}</p>
        <img src={tomMuellerImage} alt="Tom Mueller avatar" />
      </section>

      <header className="about-header">
        <h1>{name}</h1>
        <p>{summary}</p>
      </header>
      <section className="about-details">
        <ul>
          <li>Founder: {founder}</li>
          <li>Founded: {founded}</li>
          <li>Employees: {employees}</li>
          <li>Vehicles: {vehicles}</li>
          <li>Launch Sites: {launch_sites}</li>
          <li>Valuation : ${valuation}</li>
        </ul>
      </section>
      <aside className="about-address">
        <h2>Headquarters</h2>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
      </aside>
      <aside className="about-links">
        <h2>Links</h2>
        <a href={{ website }}>SpaceX</a>
        <a href={twitter}>Twitter</a>
        <a href={elon_twitter}>Elon Musk Twitter</a>
      </aside>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    spaceXInfo: state.companyInfo.companyDetails
  };
};

export default connect(mapStateToProps, {
  getCompanyInfo
})(About);
