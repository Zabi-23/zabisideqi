import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import './pages.css';

const Register: React.FC = () => {
  const dispatch: Dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
   
  }, [dispatch, email, password]); 

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Lösenorden matchar inte');
      return;
    }

    try {
      // Hantera responsen här
    } catch (error) {
      // Hantera fel här
    }
  };

  return (
    <div className="register-container"> 
      <h2>Registrera</h2>
      <div className="input-container"> 
        <label htmlFor="email" className="input-label">E-post:</label> 
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" /> 
      </div>
      <div className="input-container"> 
        <label htmlFor="password" className="input-label">Lösenord:</label> 
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" /> 
      </div>
      <div className="input-container"> 
        <label htmlFor="confirmPassword" className="input-label">Bekräfta lösenord:</label> 
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input-field" /> 
      </div>
      {error && <p className="error-message">{error}</p>} 
      <button onClick={handleRegister} className="register-button">Registrera</button> 
    </div>
  );
};

export default Register;



