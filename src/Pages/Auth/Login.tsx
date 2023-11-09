import React from "react";
import styled from "styled-components";
import { Landing, LinearGradient } from "../index";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Landing>
      <LinearGradient>
        <LoginForm>
          <InputDiv>
            <Input placeholder="Username"></Input>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M25.0002 8.33331C27.2103 8.33331 29.3299 9.21129 30.8927 10.7741C32.4555 12.3369 33.3335 14.4565 33.3335 16.6666C33.3335 18.8768 32.4555 20.9964 30.8927 22.5592C29.3299 24.122 27.2103 25 25.0002 25C22.79 25 20.6704 24.122 19.1076 22.5592C17.5448 20.9964 16.6668 18.8768 16.6668 16.6666C16.6668 14.4565 17.5448 12.3369 19.1076 10.7741C20.6704 9.21129 22.79 8.33331 25.0002 8.33331ZM25.0002 29.1666C34.2085 29.1666 41.6668 32.8958 41.6668 37.5V41.6666H8.3335V37.5C8.3335 32.8958 15.7918 29.1666 25.0002 29.1666Z"
                  fill="white"
                />
              </svg>
            </Icon>
          </InputDiv>
          <InputDiv>
            <Input placeholder="Pasword"></Input>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  d="M14.5835 31.25C16.3196 31.25 17.7953 30.6424 19.0106 29.4271C20.2259 28.2118 20.8335 26.7361 20.8335 25C20.8335 23.2639 20.2259 21.7882 19.0106 20.5729C17.7953 19.3576 16.3196 18.75 14.5835 18.75C12.8474 18.75 11.3717 19.3576 10.1564 20.5729C8.94113 21.7882 8.3335 23.2639 8.3335 25C8.3335 26.7361 8.94113 28.2118 10.1564 29.4271C11.3717 30.6424 12.8474 31.25 14.5835 31.25ZM14.5835 37.5C11.1113 37.5 8.15988 36.2847 5.72933 33.8542C3.29877 31.4236 2.0835 28.4722 2.0835 25C2.0835 21.5278 3.29877 18.5764 5.72933 16.1458C8.15988 13.7153 11.1113 12.5 14.5835 12.5C17.396 12.5 19.8529 13.2986 21.9543 14.8958C24.0557 16.4931 25.5224 18.4722 26.3543 20.8333H42.9168C43.1946 20.8333 43.4641 20.8854 43.7252 20.9896C43.9863 21.0937 44.2029 21.2326 44.3752 21.4062L46.4064 23.4375C46.6147 23.6458 46.771 23.8799 46.8752 24.1396C46.9793 24.3993 47.0314 24.6688 47.0314 24.9479C47.0314 25.2257 46.9884 25.4861 46.9022 25.7292C46.8161 25.9722 46.6682 26.1979 46.4585 26.4062L41.0418 31.8229C40.8335 32.0312 40.6078 32.1875 40.3647 32.2917C40.1217 32.3958 39.8613 32.4479 39.5835 32.4479C39.3057 32.4479 39.0453 32.4042 38.8022 32.3167C38.5592 32.2292 38.3335 32.0819 38.1252 31.875L35.4168 29.1667L32.7085 31.875C32.5002 32.0833 32.2745 32.2306 32.0314 32.3167C31.7884 32.4028 31.5279 32.4465 31.2502 32.4479C30.9724 32.4479 30.712 32.4042 30.4689 32.3167C30.2259 32.2292 30.0002 32.0819 29.7918 31.875L27.0835 29.1667H26.3543C25.4863 31.6667 23.9759 33.6806 21.8231 35.2083C19.6703 36.7361 17.2571 37.5 14.5835 37.5Z"
                  fill="white"
                />
              </svg>
            </Icon>
          </InputDiv>
          <InputDiv>
            <CheckBox type="checkbox"></CheckBox>
            <LoginP>remember me</LoginP>
          </InputDiv>
          <InputDiv>
            <Button>Sign In</Button>
          </InputDiv>
          <InputDiv>
            <LoginP>Fogot Password</LoginP>
            <Link
              to="/Register"
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                textDecoration: "none",
                float: "right",
              }}
            >
              Sign up
            </Link>
          </InputDiv>
        </LoginForm>
      </LinearGradient>
    </Landing>
  );
};
export const LoginForm = styled.div`
  position: absolute;
  @media only screen and (max-width: 1023px) {
    width: 80%;
    top: 20%;
    margin: 10%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (min-width: 1440px) {
    left: 50%;
    top: 50%;
    transform: translate(-100%, -50%);
    width: 501px;
    height: 396px;
  }
`;
export const InputDiv = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.21);
  color: #d0d0d0;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  padding-left: 70px;
  width: 100%;
  height: 80px;
`;
export const Button = styled.button`
  border-radius: 5px;
  background: linear-gradient(
    268deg,
    rgba(166, 0, 207, 0.21) 16.92%,
    rgba(143, 151, 220, 0.21) 95.44%
  );
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  border: none;
  width: 100%;
  height: 80px;
`;
export const LoginP = styled.p`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: inline-block;
  padding: 0px 5px;
  margin: 0px;
`;
export const CheckBox = styled.input`
  width: 25px;
  height: 25px;
`;
export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 35px;
  transform: translate(-50%, -50%);
`;
