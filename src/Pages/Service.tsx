import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Service: React.FC = () => {
  return (
    <SecondPart id="Service">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          px={5}
          spacing={4}
        >
          <Grid item xs={12} sm={7} md={7} lg={5}>
            <ServiceImg></ServiceImg>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <ServiceTextH2>Our Services</ServiceTextH2>
            <p>
              Ipsum is simply dummy text of the printing and typesetting
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
            <Button
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Box>
    </SecondPart>
  );
};
const SecondPart = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 200px;
`;
const ServiceImg = styled.div`
  background-image: url("/assets/img/Service.png");
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
const ServiceTextH2 = styled.h2`
  text-align: left;
`;
export default Service;
