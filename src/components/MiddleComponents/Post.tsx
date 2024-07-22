import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import api from "../../api/axios"
import { useUser } from "../../hooks/useUser";
import { UserInterface } from "../../interfaces/UserInterface";

const Wrapper = styled.div`
  width: 566px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  border: 0.1em solid #EFF3F4;
`


const IconDiv = styled.div`
  width: 100px;
  margin-right: 8px;
`

const ContentDiv = styled.div`
  width: 458px;
  padding-bottom: 12px;
`

const HeaderDiv = styled.div`
  width: 458px;
  height: 21px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`
const Content = styled.div`
  padding-top: 10px;
  font-size: 20px;
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
  userId: number;
}

const Post: React.FC<PostProps> = (props) => {
  const { content, username, timestamp, userId } = props;
  const [isFollowing, setIsFollowing] = useState<Boolean>(false)
  const now = new Date();
  const timestamp_date = new Date(timestamp);
  const ago = Math.trunc((now.getTime() - timestamp_date.getTime()) / 1000);
  const ago_str = (ago < 60) ? ago + "秒前" : (ago < 3600) ? Math.trunc(ago / 60) + "分前" : (ago < 86400) ? Math.trunc(ago / 3600) + "時間前" : Math.trunc(ago / 86400) + "日前"
  

  return (
    <Wrapper>
      <IconDiv><img src={"https://placehold.jp/24/ffffff/000000/100x100.png?text=" + username + "&css=%7B%22border%22%3A%22%20solid%22%7D"}></img></IconDiv>
      <ContentDiv>
        <HeaderDiv>
          <div>{username}</div>
          <div>{ago_str}</div>
        </HeaderDiv>
        <Content>{content}</Content>
        <FollowButton userId={userId} />
      </ContentDiv>
    </Wrapper>
  );
};

export default Post;