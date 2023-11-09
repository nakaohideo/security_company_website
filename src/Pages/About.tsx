import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";

const About: React.FC = () => {
  return (
    <FourthPart id="About">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          px={5}
          spacing={13}
        >
          <Grid item xs={12} lg={5} sm={5} md={5}>
            <FourthPartTextH2>About Us</FourthPartTextH2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Grid>
          <Grid item xs={12} lg={5} sm={7} md={7}>
            <FourthPartImg></FourthPartImg>
          </Grid>
        </Grid>
      </Box>
    </FourthPart>
  );
};
const FourthPart = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 200px;
`;
const FourthPartTextH2 = styled.h2`
  text-align: left;
`;
const FourthPartImg = styled.div`
  background-image: url("/assets/img/About.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  @media only screen and (max-width: 499px) {
    width: 100%;
    height: 220px;
  }
  @media only screen and (min-width: 500px) {
    width: 100%;
    height: 400px;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
    height: 400px;
  }
`;
export default About;
