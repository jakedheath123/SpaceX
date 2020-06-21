import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./About.css";
import elonImage from "../../images/elon.jpg";
import gwynneShotwellImage from "../../images/gwynneShotwell.png";
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
    <main>
      <section>
        <h2>CEO and CTO</h2>
        <p>{ceo}</p>
        <img
          src={elonImage}
          alt="Elon Musk avatar"
          className="ui medium image"
        />
      </section>
      <section>
        <h2>COO</h2>
        <p>{coo}</p>
        <img
          src={gwynneShotwellImage}
          alt="Gwynne Shotwell avatar"
          className="ui medium image"
        />
      </section>
      <section>
        <h2>CTO Propulsion</h2>
        <p>{cto_propulsion}</p>
        <img
          src={tomMuellerImage}
          alt="Tom Mueller avatar"
          className="ui medium image"
        />
      </section>

      <header>
        <h1>{name}</h1>
        <p>{summary}</p>
      </header>
      <details>
        <ul>
          <li>Founder: {founder}</li>
          <li>Founded: {founded}</li>
          <li>Employees: {employees}</li>
          <li>Vehicles: {vehicles}</li>
          <li>Launch Sites: {launch_sites}</li>
          <li>Valuation : ${valuation}</li>
        </ul>
      </details>
      <aside>
        <h2>Headquarters</h2>
        <p>{address}</p>
        <p>{city}</p>
        <p>{state}</p>
      </aside>
      <aside>
        <h2>Links</h2>
        <p>{website}</p>
        <p>{twitter}</p>
        <p>{elon_twitter}</p>
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
