import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 566px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  border: 0.1em solid #EFF3F4;
`


const IconDiv = styled.div`
  width: 40px;
  margin-right: 8px;
`

const ContentDiv = styled.div`
  width: 518px;
  padding-bottom: 12px;
`

const HeaderDiv = styled.div`
  width: 518px;
  height: 21px;
`
const Content = styled.div`
  font-size: 15px;
`

const BottomDiv = styled.div`
  width: 518px;
  height: 48px;
  font-size: 15px;
  vertical-align: middle;
`

const Post: React.FC = (props) => {
  return (
    <Wrapper>
      <IconDiv><img src="https://placehold.jp/3d4070/ffffff/40x40.png"></img></IconDiv>
      <ContentDiv>
        <Content>ポストを投稿</Content>
        <BottomDiv>C:10 RP:10 L:100 S:10000</BottomDiv>
      </ContentDiv>
    </Wrapper>
  );
};

export default Post;
