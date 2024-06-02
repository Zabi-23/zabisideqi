import React from 'react';
import Login from './Login'; 


interface SignInPageProps {
  isLoginPage: boolean; 
}

const SignInPage: React.FC<SignInPageProps> = ({ isLoginPage }) => {
  return (
    <div>
     
      
      <Login />
      {isLoginPage && ( 
        <div style={{ marginTop: '10px' }}>
         
        </div>
      )}
     
    </div>
  );
}

export default SignInPage;



