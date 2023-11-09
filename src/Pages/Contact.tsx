import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});

const Contact = () => {
  return (
    <SixthPart id="Contact">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} lg={6} md={6}>
            <SixthPartTextH2>Contact Us</SixthPartTextH2>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={2} lg={1} sm={1} md={2}>
                <img src="/assets/img/Vector1.png" alt="Email" />
              </Grid>
              <Grid item xs={9} lg={6} sm={5} md={5}>
                <h3>Chat With Us</h3>
                <SixthPartP>email address will be placed here</SixthPartP>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={2} lg={1} sm={1} md={2}>
                <img src="/assets/img/Vector2.png" alt="Email" />
              </Grid>
              <Grid item xs={9} lg={6} sm={5} md={5}>
                <h3>Phone</h3>
                <SixthPartP>phonenumber will be placed here</SixthPartP>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={2} lg={1} sm={1} md={2}>
                <img src="/assets/img/Vector3.png" alt="Email" />
              </Grid>
              <Grid item xs={9} lg={6} sm={5} md={5}>
                <h3>Office</h3>
                <SixthPartP>location will be placed here</SixthPartP>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5} md={6}>
            <Box
              sx={{
                maxWidth: "100%",
              }}
            >
              <ThemeProvider theme={outerTheme}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  xs={12}
                  spacing={3}
                >
                  <Grid item xs={11}>
                    <TextField fullWidth label="Your name" id="fullWidth" />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField fullWidth label="Your email" id="fullWidth" />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField fullWidth label="Subject" id="fullWidth" />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SixthPart>
  );
};
const SixthPart = styled.div`
  width: 100%;
  margin-top: 200px;
`;
const SixthPartTextH2 = styled.h2`
  @media only screen and (max-width: 1439px) {
    margin: 0 23%;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 21%;
  }
`;
const SixthPartP = styled.p`
  line-height: 20px;
`;

export default Contact;
