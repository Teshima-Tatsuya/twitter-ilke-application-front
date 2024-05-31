import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PostForm from "./MiddleComponents/PostForm"
import Post from "./MiddleComponents/Post"

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
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
      <Post content="タイムライン" username="testuser" timestamp="2024/1/1 10:00:00" />
    </Column>
  );
};

export default MiddleColumn;