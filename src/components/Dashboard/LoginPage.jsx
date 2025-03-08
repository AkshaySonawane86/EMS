import React, { useEffect, useState } from 'react';
import './LoginPage.css'; 


const LoginPage = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    
    handleLogin(email,password)

    setEmail("");
    setPassword("");
  };

  

  return (
    <>
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    
    
    </>
  );
};

export default LoginPage;
