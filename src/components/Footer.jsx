import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'rgba(0,0,0,0.2)', 
      padding: '80px 0', 
      marginTop: 'var(--spacing-xl)',
      borderTop: '1px solid rgba(245, 245, 220, 0.05)'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '60px' 
      }}>
        <div>
          <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>ALIYAH ABAYA</h3>
          <p style={{ fontSize: '0.9rem', opacity: 0.7, maxWidth: '300px' }}>
            Timeless elegance crafted for the modern woman. Our pieces are more than just garments; they are a legacy of grace.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Explore</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/atelier">The Atelier</Link></li>
            <li><Link to="/events">Grand Opening</Link></li>
            <li><Link to="/social">Social Hub</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Abuja, Nigeria</li>
            <li>info@aliyahabaya.com</li>
            <li style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <Camera size={20} />
              <Send size={20} />
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Newsletter</h4>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--champagne)', paddingBottom: '10px' }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--champagne)', 
                fontSize: '0.9rem',
                width: '100%',
                outline: 'none'
              }} 
            />
            <button style={{ color: 'var(--gold)' }}>JOIN</button>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '80px', paddingTop: '20px', borderTop: '1px solid rgba(245, 245, 220, 0.05)', fontSize: '0.75rem', opacity: 0.5, textAlign: 'center' }}>
        © 2026 ALIYAH ABAYA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
