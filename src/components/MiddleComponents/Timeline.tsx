import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Post from "./Post"
import axios from "axios";

interface Post {
  id: number;
  user_id: number;
  name: string;
  content: string;
  created_at: string;
}

const Timeline: React.FC = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPosts();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>('http://localhost:8080/api/v1/posts');
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  return (
    <>
      {posts.map(post => (
        <Post
          content={post.content}
          username={post.name}
          timestamp={post.created_at}
          userId={post.user_id}
          key={post.id}
        />
      ))}
    </>
  );
};

export default Timeline;