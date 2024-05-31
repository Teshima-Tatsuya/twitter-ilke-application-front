import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faX, faUser, faU } from "@fortawesome/free-solid-svg-icons";

const Column = styled.div`
  width: 259px;
  paddint-left: 8px;
  paddint-right: 8px;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
`

const XDiv = styled.div`
  width: "50px";
  height: "50px";
  padding-top: 15px;
  padding-bottom: 20px;
`

const Item = styled.a`
  width: 259px;
  height: 50px;
  padding-bottom: 4px;
  padding-top: 4px;
  font-size: 20px;
  vertical-align: middle;
  display: flex;
`

const IconDiv = styled.div`
  width: 26.25px;
  height: 26.25px;
  font-size: 25px;
`

const TextDiv = styled.div`
  height: 24px;
  margin-left: 20px;
  margin-right: 16px;
`

const TextA = styled.a`
  height: 24px;
  margin-left: 20px;
  margin-right: 16px;
  text-decoration: none;
  color: #000000;
`

const LeftColumn: React.FC = (props) => {
  return (
    <Column>
      <XDiv><FontAwesomeIcon icon={faX} style={{ fontSize: "30px" }} /></XDiv>
      <Item>
        <IconDiv><FontAwesomeIcon icon={faHome} /></IconDiv>
        <TextDiv><TextA href="">ホーム</TextA></TextDiv>
      </Item>
      <Item>
        <IconDiv><FontAwesomeIcon icon={faUser} /></IconDiv>
        <TextDiv><TextA href="">プロフィール</TextA></TextDiv>
      </Item>
    </Column>
  );
};

export default LeftColumn;