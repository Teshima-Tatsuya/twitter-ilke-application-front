import React, { useState, useEffect, ReactNode } from 'react';
import UserContext from '../contexts/UserContext';
import api from '../api/axios';
import { UserInterface } from '../interfaces/UserInterface';

interface UserProviderProps {
    children: ReactNode;
}
  
export const UserProvider: React.FC<UserProviderProps > = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/profile');
        setUser(response.data.user);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const updateUser = (user: UserInterface) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, loading, error, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};