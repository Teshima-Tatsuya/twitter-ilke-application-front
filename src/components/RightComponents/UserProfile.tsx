import React, {useEffect, useState} from "react";
import styled from "styled-components";
import api from "../../api/axios"
import { useUser } from "../../hooks/usrUser";

interface Profile {
  name: string
  email: string
}

const UserProfile: React.FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading...</div>
  if (!user) return <div>未ログイン</div>;

  return (
    <>
      現在のログインユーザ情報<br />
      名前：{user.name}<br />
      email：{user.email}<br />
    </>
  );
};

export default UserProfile;