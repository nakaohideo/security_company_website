import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Client: React.FC = () => {
  return (
    <FifthPart>
      <Box sx={{ flexGrow: 1 }}>
        <FifthPartText1>What clients say</FifthPartText1>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          px={5}
          spacing={1}
        >
          <Grid item xs={12} lg={3} md={3}>
            <ClientBoard>
              <FifthPartImg1></FifthPartImg1>
              <StarGroup>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
              </StarGroup>
            </ClientBoard>
          </Grid>
          <Grid item xs={12} lg={4} md={4}>
            <ClientBoard1>
              <FifthPartImg2></FifthPartImg2>
              <StarGroup>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
              </StarGroup>
              <FifthPartText2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </FifthPartText2>
            </ClientBoard1>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <ClientBoard>
              <FifthPartImg3></FifthPartImg3>
              <StarGroup>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
                <FifthPartImg4></FifthPartImg4>
              </StarGroup>
            </ClientBoard>
          </Grid>
        </Grid>
      </Box>
    </FifthPart>
  );
};
const FifthPart = styled.div`
  width: 100%;
`;
const FifthPartText1 = styled.h2`
  text-align: center;
  margin: 0px 0px 100px;
`;
const FifthPartImg1 = styled.div`
  background-image: url("/assets/img/Man1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100px;
  margin: 50px auto 20px;
  @media only screen and (max-width: 1439px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (min-width: 1440px) {
    width: 200px;
    height: 200px;
  }
`;
const FifthPartImg2 = styled.div`
  background-image: url("/assets/img/Man2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100px;
  @media only screen and (max-width: 1439px) {
    width: 120px;
    height: 120px;
    margin: 20px auto;
  }
  @media only screen and (min-width: 1440px) {
    width: 150px;
    height: 150px;
    margin: 30px auto;
  }
`;
const FifthPartImg3 = styled.div`
  background-image: url("/assets/img/Man3.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100px;
  margin: 50px auto 20px;
  @media only screen and (max-width: 1439px) {
    width: 150px;
    height: 150px;
  }
  @media only screen and (min-width: 1440px) {
    width: 200px;
    height: 200px;
  }
`;
const FifthPartImg4 = styled.div`
  background-image: url("/assets/img/star.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  display: inline-block;
  @media only screen and (max-width: 1439px) {
    width: 30px;
    height: 30px;
  }
  @media only screen and (min-width: 1440px) {
    width: 50px;
    height: 50px;
    margin: 0px auto 20px;
  }
`;
const ClientBoard = styled.div`
  border-radius: 10px;
  background: #121212;
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.5);
  padding: 10px;
  width: 100%;
`;
const ClientBoard1 = styled.div`
  border-radius: 10px;
  background: #121212;
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.5);
  padding: 10px;
  width: 100%;
  @media only screen and (min-width: 900px) {
    transform: scale(1.2);
  }
`;
const StarGroup = styled.div`
  text-align: center;
`;
const FifthPartText2 = styled.p`
  @media only screen and (max-width: 1439px) {
    margin: 50px 30px 50px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0px 50px 100px;
  }
`;
export default Client;
