import axios from 'axios';

const useAuth = () => {
  const token = localStorage.getItem('token');

  const authAxios = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return { authAxios };
};

export default useAuth;