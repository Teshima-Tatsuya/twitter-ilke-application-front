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
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  font-size: 15px;
`

const BottomDiv = styled.div`
  width: 518px;
  height: 32px;
  font-size: 15px;
  display: flex;
  align-items: end;
`

type PostProps = {
  content: string;
  username: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { content, username, timestamp } = props;
  const now = new Date();
  const timestamp_date = new Date(timestamp);
  const ago = Math.trunc((now.getTime() - timestamp_date.getTime()) / 1000);
  const ago_str = (ago < 60) ? ago + "秒前" : (ago < 3600) ? Math.trunc(ago / 60) + "分前" : (ago < 86400) ? Math.trunc(ago / 3600) + "時間前" : Math.trunc(ago / 86400) + "日前"
  return (
    <Wrapper>
      <IconDiv><img src={"https://placehold.jp/24/ffffff/000000/40x40.png?text=" + username}></img></IconDiv>
      <ContentDiv>
        <HeaderDiv>
          <div>{username}</div>
          <div>{ago_str}</div>
        </HeaderDiv>
        <Content>{content}</Content>
      </ContentDiv>
    </Wrapper>
  );
};

export default Post;