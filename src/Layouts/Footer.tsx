import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterPart>
      <FooterMask>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} lg={3}>
              <FooterImg1></FooterImg1>
            </Grid>
            <Grid item xs={12} lg={3}>
              <FooterH3>Home</FooterH3>
              <FooterH3>Our Services</FooterH3>
              <FooterH3>About Us</FooterH3>
              <FooterH3>Client say</FooterH3>
              <FooterH3>Contact Us</FooterH3>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={1} lg={2} sm={1}>
                  <img src="/assets/img/Vector1.png" alt="Email" />
                </Grid>
                <Grid item xs={9} lg={8} sm={4}>
                  <h3>Chat With Us</h3>
                  <p>email address will be placed here</p>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={1} lg={2} sm={1}>
                  <img src="/assets/img/Vector2.png" alt="Email" />
                </Grid>
                <Grid item xs={9} lg={8} sm={4}>
                  <h3>Phone</h3>
                  <p>phonenumber will be placed here</p>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={1} lg={2} sm={1}>
                  <img src="/assets/img/Vector3.png" alt="Email" />
                </Grid>
                <Grid item xs={9} lg={8} sm={4}>
                  <h3>Office</h3>
                  <p>location will be placed here</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <div
                style={{
                  width: "80%",
                  height: "1px",
                  background: "#FFF",
                  margin: "0px auto",
                }}
              ></div>
              <h3>All rights @ 2023</h3>
            </Grid>
          </Grid>
        </Box>
      </FooterMask>
    </FooterPart>
  );
};
const FooterPart = styled.div`
  width: 100%;
  background-image: url("/assets/img/Footer.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  margin-top: 100px;
  @media only screen and (max-width: 1439px) {
    text-align: center;
  }
`;
const FooterImg1 = styled.div`
  background-image: url("/assets/img/Bang.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 30px;
  display: inline-block;
  @media only screen and (max-width: 1439px) {
    width: 140px;
    height: 160px;
    margin: 50px;
  }
  @media only screen and (min-width: 1440px) {
    width: 150px;
    height: 170px;
    margin: 110px;
  }
`;
const FooterMask = styled.div`
  background: linear-gradient(180deg, #000 -2.79%, rgba(17, 17, 17, 0) 100%);
  width: 100%;
  @media only screen and (max-width: 1439px) {
    text-align: center;
  }
`;
const FooterH3 = styled.h3`
  line-height: 35px;
  font-size: 30px;
`;
export default Footer;
