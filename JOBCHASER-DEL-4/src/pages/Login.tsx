

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <button className="login-button">Logga in</button>
      <div className="input-container">
        <label htmlFor="email" className="input-label">E-post:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      </div>
      <div className="input-container">
        <label htmlFor="password" className="input-label">Lösenord:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
      </div>
      
      <Link to="/" className="link-button">Back to Homepage</Link>
      <br />
      <Link to="/register" className="register-link">Don't have an account? <br /> <button className="signup-button">Sign Up</button></Link>
    </div>
  );
};

export default Login;


