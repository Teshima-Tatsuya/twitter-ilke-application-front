import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Column = styled.div`
  width: 960px;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`

const PostForm: React.FC = (props) => {
  return (
    <Column>
      真ん中のカラム
    </Column>
  );
};

export default PostForm;