import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
      <FirstPart id="Home">
        <FirstPartH1>Phoniex Security Service</FirstPartH1>
        <FirstPartP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </FirstPartP>
        <GetStarted>
          <img src="/assets/img/Login_Button.png" alt="Get_Started" />
          <GetStartedSpan>Get Started</GetStartedSpan>
        </GetStarted>
      </FirstPart>
  );
};
const FirstPart = styled.div`
  display: inline-block;
  @media only screen and (max-width: 1439px) {
    text-align: center;
    margin: 200px 0px 400px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 200px 0px 500px 200px;
  }
`;
const FirstPartH1 = styled.h1`
  text-shadow: 0px 5px 20px rgba(255, 255, 255, 0.5),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
  @media only screen and (max-width:1339px){
    font-size: 40px;
  }
  @media only screen and (min-width:1440px){
    font-size: 70px;
  }
`;
export const FirstPartP = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  @media only screen and (max-width: 1439px) {
    margin: 10px auto;
    width: 70%;
  }
  @media only screen and (min-width: 1440px) {
    width: 50%;
    margin: 0;
  }
`;
const GetStarted = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;
const GetStartedSpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export default Home;
