import React from "react";
import styled from "styled-components";
import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import RightColumn from "./RightColumn";
import { Link } from "react-router-dom";

const WrapperBox = styled.div`
  display: flex;
  width: 1327px;
  margin: 0px auto;
`

const Wrapper: React.FC = (props) => {
  return (
    <WrapperBox>
      <LeftColumn />
      <MiddleColumn />
      <RightColumn />
    </WrapperBox>
  );
};

export default Wrapper;