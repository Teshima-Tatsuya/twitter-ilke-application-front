import React, { useState } from 'react';
import api from '../../api/axios';

const Logon = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', { user: { name, email, password, password_confirmation } });
      localStorage.setItem('token', response.data.token);
      window.location.reload()
    } catch (error) {
      console.error('Logon failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      ユーザ登録はこちら
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); setPasswordConfirmation(e.target.value) }}
        placeholder="Password"
        required
      />
      <br />
      <button type="submit">ユーザ登録</button>
    </form>
  );
};

export default Logon;