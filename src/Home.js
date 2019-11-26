import React, { Component } from "react";
import "./style/home.css";
import Experience from "./Experience";

export default class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <div className="main-intro">
          <div className="main-gear-container">
            <div>
              <svg
                className="main-gear-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-75 167 460 460"
              ></svg>
              <svg
                className="spin main-gear-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-75 167 460 460"
              >
                <circle className="st1 st3" cx="155.4" cy="397" r="165.5"></circle>
                <path
                  className="st1"
                  d="M381.9,411.4v-28.9c-10,0-18.7-4.7-23.7-11.8c-1.2-9.3-3-18.4-5.4-27.3 c1.9-8.4,8.1-16.1,17.3-19.9l-11-26.7c-9.2,3.8-19.1,2.8-26.3-1.9c-4.6-8-9.8-15.8-15.4-23.1c-1.5-8.5,1.3-18,8.3-25.1l-20.4-20.4 c-7.1,7.1-16.6,9.9-25.1,8.4c-7.3-5.6-15-10.8-23.1-15.4c-4.7-7.3-5.7-17.1-1.9-26.4l-26.7-11.1c-3.8,9.2-11.5,15.4-19.9,17.3 c-8.9-2.4-18-4.2-27.3-5.4c-7.1-4.9-11.9-13.6-11.9-23.7h-28.9c0,10-4.7,18.7-11.8,23.7c-9.3,1.2-18.4,3-27.3,5.4 c-8.4-1.9-16.1-8.1-19.9-17.3l-26.7,11.1c3.8,9.2,2.8,19.1-1.9,26.4c-8,4.6-15.8,9.8-23.1,15.4c-8.5,1.5-18-1.3-25.1-8.4l-20.4,20.4 c7.1,7.1,9.9,16.6,8.3,25.1c-5.6,7.3-10.8,15-15.4,23.1c-7.3,4.7-17.1,5.7-26.3,1.9l-11.1,26.7c9.2,3.8,15.4,11.5,17.3,19.9 c-2.4,8.9-4.2,18-5.4,27.3c-4.9,7.1-13.6,11.8-23.7,11.8v28.9c10,0,18.7,4.7,23.6,11.9c1.2,9.3,3,18.4,5.4,27.3 c-1.9,8.4-8.1,16.1-17.3,19.9l11.1,26.7c9.2-3.8,19.1-2.8,26.4,1.9c4.6,8,9.8,15.8,15.4,23.1c1.5,8.5-1.3,18-8.4,25.1l20.4,20.4 c7.1-7.1,16.6-9.9,25.1-8.3c7.3,5.6,15,10.8,23.1,15.4c4.7,7.3,5.7,17.1,1.9,26.3l26.7,11.1c3.8-9.2,11.5-15.4,19.9-17.3 c8.9,2.4,18,4.2,27.3,5.4c7.1,4.9,11.8,13.6,11.8,23.7h28.9c0-10,4.7-18.7,11.9-23.7c9.3-1.2,18.4-3,27.3-5.4 c8.4,1.8,16.1,8.1,19.9,17.3l26.7-11.1c-3.8-9.2-2.8-19.1,1.9-26.3c8-4.6,15.8-9.8,23.1-15.4c8.5-1.5,18,1.3,25.1,8.3l20.4-20.4 c-7.1-7.1-9.9-16.6-8.4-25.1c5.6-7.3,10.8-15,15.4-23.1c7.3-4.7,17.1-5.7,26.4-1.9l11.1-26.7c-9.2-3.8-15.4-11.5-17.3-19.9 c2.4-8.9,4.2-18,5.4-27.3C363.3,416.2,371.9,411.4,381.9,411.4z"
                ></path>
              </svg>
              <svg
                className="main-gear-svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-75 167 460 460"
              >
                <defs>
                  <circle
                    cx="155.1"
                    cy="397.2"
                    r="165"
                    id="clip-circle"
                  ></circle>
                </defs>
                <clipPath id="clip-circle-path">
                  <use xlinkHref="#clip-circle" style={{"overflow":"visible"}}>
                  <circle cx="155.1" cy="397.2" r="165" id="clip-circle"></circle>
                  </use>
                </clipPath>
                <g className="gear-image">
                  <image
                    style={{"opacity":"0"}}
                    className="gear-image-image gear-image-show"
                    xlinkHref="./assets/GitHub-Mark-64px.png"
                    transform="matrix(
                        0.555 0 0 0.555
                        -75.3 
                        170)"
                    width="200"
                    height="200"
                  ></image>
                </g>
              </svg>
            </div>
          </div>
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
            <div className="intro-blurb-container">
              <h1 className="intro-blurb">
                Hi, I'm Shubham Saxena
              </h1>
              <p className={"intro-blurb"}>
                I'm a full stack developer with an experience of 4+ years with a
                B.tech degree in Electronics and Instrumentation Engg.
                <br />
                I'm currently working for Wealth Management IT for Danske
                IT(captive unit of Danske Bank)
                <br />I have an extensive experience in server side as well as
                client side development for customer facing applications.
              </p>
              <div className="social-links">
                <div className="social-item" title="Github">
                  <a
                    href="https://github.com/shubhu281993"
                    className="social-flex"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 1024 1024"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="#1B1F23"
                      />
                    </svg>
                  </a>
                </div>
                <div className="social-item" title="Linkedin">
                  <a
                    href="https://www.linkedin.com/in/shubham-saxena-7b745094"
                    className="social-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className="social-item" title="Email">
                  <a href="mailto:shubhukiit@gmail.com" className="social-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                  </a>
                </div>{" "}
                <div className="social-item" title="Resume">
                  <a href="/resume" className="social-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm4.256 11h-12v-1h12v1zm0-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" />
                    </svg>
                  </a>
                </div>{" "}
                <div className="social-item" title="Twitter">
                  <a
                    href="https://twitter.com/@shubhu4yu"
                    className="social-flex"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
              <br />
              <div className="main-see-below">
                See some of my work in{" "}
                <a href="#experience" style={{ color: "blue" }}>
                  {" "}
                  Experience{" "}
                </a>{" "}
                Section
              </div>
            </div>
          </div>
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    );
  }
}
