import React from "react";
import { useUser } from "../../hooks/useUser";

const UserProfile: React.FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading...</div>
  if (!user) return <div>未ログイン</div>;
  const token = localStorage.getItem('token');

  return (
    <>
      現在のログインユーザ情報<br />
      ID：{user.id}<br />
      名前：{user.name}<br />
      email：{user.email}<br />
      JWT token：{token}<br />
    </>
  );
};

export default UserProfile;