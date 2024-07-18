import React from "react";
import { useUser } from "../../hooks/useUser";

const UserProfile: React.FC = () => {
  const { user, loading, error } = useUser();

  if (loading) return <div>Loading...</div>
  if (!user) return <div>未ログイン</div>;

  return (
    <>
      現在のログインユーザ情報<br />
      ID：{user.id}<br />
      名前：{user.name}<br />
      email：{user.email}<br />
      JWT token：{}<br />
    </>
  );
};

export default UserProfile;