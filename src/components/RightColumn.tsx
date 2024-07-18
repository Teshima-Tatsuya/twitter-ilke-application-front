import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logon from "./RightComponents/Logon"
import Login from "./RightComponents/Login"
import UserProfile from "./RightComponents/UserProfile"

const Column = styled.div`
  width: 350px;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 70px;
`

const Item = styled.div`
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 15px;
`

const HR = styled.hr`
  margin-bottom: 100px;
  margin-top: 100px;
`

const RightColumn: React.FC = (props) => {
  return (
    <Column>
      <Logon />
      <HR />
      <Login />
      <HR />
      <UserProfile />
    </Column>
  );
};

export default RightColumn;