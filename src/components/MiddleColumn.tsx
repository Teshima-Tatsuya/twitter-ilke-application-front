import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "./MiddleComponents/PostForm"
import Timeline from "./MiddleComponents/Timeline"

const Column = styled.div`
  max-width: 598px;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`

const MiddleColumn: React.FC = (props) => {
  return (
    <Column>
      <PostForm />
      <Timeline />
    </Column>
  );
};

export default MiddleColumn;