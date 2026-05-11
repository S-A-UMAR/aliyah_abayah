import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { CONFIG } from '../constants';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'rgba(0,0,0,0.2)', 
      padding: '80px 0', 
      marginTop: 'var(--spacing-xl)',
      borderTop: '1px solid rgba(245, 245, 220, 0.05)'
    }}>
      {/* Global Concierge Trust Section */}
      <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', padding: '60px 20px', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', marginBottom: '80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}>
          <div>
            <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Worldclass Logistics</div>
            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Global Express Shipping</h4>
            <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '10px' }}>Serving our private clients in London, Dubai, and beyond via DHL Express.</p>
          </div>
          <div>
            <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Atelier Quality</div>
            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Secure Handling</h4>
            <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '10px' }}>Every Abaya is steamed, inspected, and wrapped in acid-free silk tissue.</p>
          </div>
          <div>
            <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Heritage Rooted</div>
            <h4 className="serif" style={{ fontSize: '1.4rem' }}>Shipped from Abuja</h4>
            <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '10px' }}>Authentically crafted and dispatched from our central Abuja atelier.</p>
          </div>
        </div>
      </div>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '60px' 
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <h3 className="serif" style={{ fontSize: '1.5rem', letterSpacing: '0.1em', paddingLeft: '0.1em' }}>ALIYAH ABAYA</h3>
            <span style={{ fontSize: '1.2rem', color: 'var(--gold)', letterSpacing: '0.1em', paddingLeft: '0.1em' }}>علياه</span>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.7, maxWidth: '300px' }}>
            Timeless Abaya elegance crafted for the modern woman. Our pieces are more than just Abayas; they are a legacy of grace.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Explore</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/atelier">The Atelier</Link></li>
            <li><Link to="/heritage">Our Heritage</Link></li>
            <li><Link to="/events">Abuja Pop-Up</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Client Services</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/booking">Private Fitting</Link></li>
            <li><Link to="/care">Size & Care Guide</Link></li>
            <li><Link to="/care">Shipping & Returns</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Abuja, Nigeria</li>
            <li>info@aliyahabaya.com</li>
            <li style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <a href="https://instagram.com/aliyah_abayah" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <MessageCircle size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Newsletter</h4>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.elements[0].value;
              const message = `Hello Aliyah Concierge, I would like to join the inner circle newsletter.\n\nEmail: ${email}`;
              window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            style={{ display: 'flex', borderBottom: '1px solid var(--champagne)', paddingBottom: '10px' }}
          >
            <input 
              required
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
            <button type="submit" style={{ color: 'var(--gold)', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>JOIN</button>
          </form>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '80px', paddingTop: '20px', borderTop: '1px solid rgba(245, 245, 220, 0.05)', fontSize: '0.75rem', opacity: 0.5, textAlign: 'center' }}>
        © 2026 ALIYAH ABAYA. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
