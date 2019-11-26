import React, { Component } from "react";
import "./style/experience.css";
import DanskeLogo from "./assets/DanskeBank.png";
import Accenture from "./assets/accenture.png";
import Fade from "react-reveal/Fade";
import { button, collapse } from "bootstrap";

export default class Experience extends Component {
  render() {
    return (
      <div className="page-content">
        <h1 className="centered margin-bottom-15px">Experience</h1>
        <Fade left>
          <div
            className="react-reveal"
            style={{
              animationFillMode: "both",
              animationDura: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              animationName: "react-reveal-290203494213240-1"
            }}
          >
            <div className="single-position">
              <div className="card">
                <div className="single-position-img-and-title">
                  <div className="single-position-img">
                    <div className="card-title">
                      <img src={DanskeLogo} width="60%" />
                    </div>
                  </div>
                  <div className="single-position-body card-body">
                    <div className="single-position-title card-title">
                      Software Developer
                    </div>
                    <div className="single-position-subtitle card-subtitle">
                      Danske IT
                    </div>
                    <div className="single-position-subtitle-date card-subtitle">
                      Feb 2019 - till now
                    </div>

                    <p>
                      Tech Stack :- React JS, Redux Saga, C#, Dot Net Core,
                      Dapper ORM, XUnit and Wire Mock
                    </p>

                    <p className="collapse" id="block-id">
                      • Worked on WatchList Feature for Mobile Banking and
                      E-Banking for Wealth Management IT.
                      <br />
                      • Gathered information from existing Mainframe Components
                      to get the request and responses.
                      <br />
                      • Developed API modules from scratch to incorporate
                      multiple watchlist functionality.
                      <br /> • Used DotNet Core framework and Dapper ORM to
                      connect to DB2LUW database and SQL Server.
                      <br /> • Used X-unit framework and Wire Mock for TDD.
                      <br /> • Interacted with business to get detailed
                      specification for this migration with additional features.
                        <button className="btn-tertiary btn btn-secondary">
                          <a style={{color:"#005696"}} href="https://danskebank.com/">
                            Danske Bank Homepage
                          </a>
                        </button>
                    </p>

                    <a
                      href="#block-id"
                      className="single-position-button btn btn-secondary"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="block-id"
                    >
                      <span className="collapsed">Show more</span>
                      <span className="expanded">Show Less</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div
            className="react-reveal"
            style={{
              animationFillMode: "both",
              animationDura: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              animationName: "react-reveal-290203494213240-1"
            }}
          >
            <div className="single-position">
              <div className="card">
                <div className="single-position-img-and-title">
                  <div className="single-position-img">
                    <div className="card-title">
                      <img src={Accenture} width="60%" />
                    </div>
                  </div>
                  <div className="single-position-body card-body">
                    <div className="single-position-title card-title">
                      Application Development Analyst
                    </div>
                    <div className="single-position-subtitle card-subtitle">
                      Accenture
                    </div>
                    <div className="single-position-subtitle-date card-subtitle">
                      Oct 2017 - Feb 2019
                    </div>

                    <p>
                      I have started my technical journey with Accenture from
                      7th Oct, 2015 and during my tenure, i got an opportunity
                      to work for 3-clients of different domains- Retail,
                      Healthcare and Financial.
                    </p>

                    <p className="collapse" id="acc-id">
                      • Worked on develop Micro Services on Dot Net Core for
                      Dell Financial Services <br />
                      • Developed automated tests for the micro services using
                      X-UNIT and MOQ Framework. <br />
                      • Developed modules from scratch. <br />
                      • Involved in discussions for Design and implementation
                      and requirement analysis directly with the business.{" "}
                      <br />
                      • Taken ownership of individual units of a module during
                      development. • Interacted with business analysts, testers
                      and Development Architectures to determine optimal
                      specifications. <br />
                        <button className="btn-tertiary btn btn-secondary">
                          <a style={{color:"#005696"}} href="https://www.accenture.com/in-en">
                            Accenture India
                          </a>
                        </button>
                    </p>

                    <a
                      href="#acc-id"
                      className="single-position-button btn btn-secondary"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="acc-id"
                    >
                      <span className="collapsed">Show more</span>
                      <span className="expanded">Show Less</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
