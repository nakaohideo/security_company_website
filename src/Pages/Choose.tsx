import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Choose: React.FC = () => {
  return (
    <ThirdPart>
      <ThirdPartH2>Why you should choose us</ThirdPartH2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          px={1}
          spacing={5}
        >
          <Grid item xs={12} lg={4}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              px={5}
              spacing={5}
            >
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartImg1></ThirdPartImg1>
              </Grid>
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartText1>Effective</ThirdPartText1>
                <ThirdPartText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since
                </ThirdPartText2>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              px={5}
              spacing={5}
            >
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartImg2></ThirdPartImg2>
              </Grid>
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartText1>Professional</ThirdPartText1>
                <ThirdPartText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </ThirdPartText2>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              px={5}
              spacing={5}
            >
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartImg3></ThirdPartImg3>
              </Grid>
              <Grid item xs={12} lg={12} md={6} sm={6}>
                <ThirdPartText1>Diverse</ThirdPartText1>
                <ThirdPartText2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </ThirdPartText2>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThirdPart>
  );
};
const ThirdPart = styled.div`
  width: 100%;
  margin-bottom: 200px;
  @media only screen and (max-width: 1339px) {
    text-align: center;
  }
  @media only screen and (min-width: 1440px) {
    text-align: center;
    margin-bottom: 200px;
  }
`;
const ThirdPartImg1 = styled.div`
  background-image: url("/assets/img/Effective.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  width: 100%;
  @media only screen and (max-width: 599px) {
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    height: 280px;
  }
  @media only screen and (min-width: 1440px) {
    height: 520px;
  }
`;
const ThirdPartImg2 = styled.div`
  background-image: url("/assets/img/Professional.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  width: 100%;
  @media only screen and (max-width: 599px) {
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    height: 280px;
  }
  @media only screen and (min-width: 1440px) {
    height: 520px;
  }
`;
const ThirdPartImg3 = styled.div`
  background-image: url("/assets/img/Diverse.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  width: 100%;
  @media only screen and (max-width: 599px) {
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    height: 280px;
  }
  @media only screen and (min-width: 1440px) {
    height: 520px;
  }
`;
const ThirdPartText1 = styled.h3`
  text-align: left;
  @media only screen and (max-width: 1339px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
const ThirdPartText2 = styled.p`
  text-align: left;
`;
const ThirdPartH2 = styled.h2`
  margin: 0px 0px 100px;
`;
export default Choose;
