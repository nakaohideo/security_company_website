import React from "react";
import "./index.css";
import Home from "./Home";
import Service from "./Service";
import Choose from "./Choose";
import About from "./About";
import Client from "./Client";
import Contact from "./Contact";
import Footer from "../Layouts/Footer";

import styled from "styled-components";

export const Index = () => {
  return (
    <Landing>
      <LinearGradient>
        <Home />
        <Service />
        <Choose />
        <About />
        <Client />
        <Contact />
        <Footer />
      </LinearGradient>
    </Landing>
  );
};

export const Landing = styled.div`
  width: 100%;
  background-image: url("/assets/img/Landing.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;
export const LinearGradient = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(183deg, rgba(0, 0, 0, 0) 0%, black 100%);
`;
