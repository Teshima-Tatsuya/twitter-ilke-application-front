import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { useUser } from "../../hooks/useUser";
import { UserInterface } from '../../interfaces/UserInterface';

interface FollowButtonProps {
  userId: number;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
  const { user } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user) return; // ユーザーが未認証の場合は早期リターン

    const fetchIsFollowing = async () => {
      try {
        const response = await api.post('/following/' + userId, {
          current_user_id: user.id
        });
        setIsFollowing(response.data.following);
      } catch (err) {
      }
    };
    fetchIsFollowing();
  }, [userId, user]);

  const handleFollowToggle = async () => {
    setIsLoading(true);
    try {
      if (isFollowing) {
        await api.post(`/unfollow/${userId}`);
      } else {
        await api.post(`/follow/${userId}`);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error('Error toggling follow status:', error);
      // エラーメッセージを表示するなどのエラーハンドリング
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleFollowToggle} 
      disabled={isLoading}
      style={{
        backgroundColor: isFollowing ? 'green' : 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: isLoading ? 'not-allowed' : 'pointer'
      }}
    >
      {isLoading ? 'Processing...' : (isFollowing ? 'Unfollow' : 'Follow')}
    </button>
  );
};

export default FollowButton;