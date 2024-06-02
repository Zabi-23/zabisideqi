import { Link, useLocation } from 'react-router-dom'; // Importera Link och useLocation här
import './pages.css'

function SignInPage() {
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/login'; 

  return (
    <div>
      
      {isLoginPage && ( 
        <div style={{ marginTop: '10px' }}>
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
      )}
    </div>
  );
}

export default SignInPage;







