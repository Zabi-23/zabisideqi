
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Other languages</h3>
          <ul>
            <li>Svenska </li>
            <li>Engelska</li>
            <li>Persiska</li>
            {/* Lägg till fler språk här */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>För arbetsgivare</h3>
          <ul>
            <li>För leverantörer</li>
            <li>Om oss</li>
            {/* Lägg till fler tillgänglighetsalternativ här */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            {/* Lägg till fler kontaktalternativ här */}
          </ul>
        </div>
        {/* Lägg till fler sektioner för övriga länkar */}
      </div>
      <div className="footer-social">
        <h3>Follow us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Youtube</a></li>
          <li><a href="#">Instagram</a></li>
          {/* Lägg till fler sociala medier här */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
