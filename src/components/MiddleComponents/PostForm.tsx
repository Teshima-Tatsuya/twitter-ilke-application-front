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
  display: flex;
  align-items: end;
`

const StatDiv = styled.div`
  width: 401px;
  padding: 2px;
  height: 36px;
`

const PostButton = styled.button`
  min-width: 36px;
  min-height: 36px;
  margin-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  background-color: rgb(29, 155, 240);
  border-color: rgba(0, 0, 0, 0);
`

const PostButtonText = styled.span`
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
`

const Post: React.FC = (props) => {
  return (
    <Wrapper>
      <IconDiv><img src="https://placehold.jp/3d4070/ffffff/40x40.png"></img></IconDiv>
      <ContentDiv>
        <Content>ポストを投稿</Content>
        <form action="">
          <textarea rows={5} cols={70}></textarea>
          <BottomDiv><StatDiv></StatDiv><PostButton><PostButtonText>ポストする</PostButtonText></PostButton></BottomDiv>
        </form>
      </ContentDiv>
    </Wrapper>
  );
};

export default Post;
