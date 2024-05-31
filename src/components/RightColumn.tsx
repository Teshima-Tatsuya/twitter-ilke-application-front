import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const RightColumn: React.FC = (props) => {
  return (
    <Column>
      <Item>何かの広告</Item>
    </Column>
  );
};

export default RightColumn;