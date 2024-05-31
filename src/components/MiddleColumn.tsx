import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Post from "./MiddleComponents/Post"

const Column = styled.div`
  width: 598px;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  border: 0.1em solid;
`

const MiddleColumn: React.FC = (props) => {
  return (
    <Column>
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
    </Column>
  );
};

export default MiddleColumn;