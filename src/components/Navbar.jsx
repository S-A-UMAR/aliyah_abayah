import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Atelier', path: '/atelier' },
    { name: 'Grand Opening', path: '/events' },
    { name: 'Connect', path: '/social' },
  ];

  return (
    <nav className="navbar" style={{ padding: '30px 0', borderBottom: '1px solid rgba(245, 245, 220, 0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.8rem', letterSpacing: '0.2em', fontWeight: '500' }} className="serif">
          ALIYAH
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{ 
                fontSize: '0.85rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: location.pathname === link.path ? '#D4AF37' : '#F5F5DC',
                fontWeight: location.pathname === link.path ? '600' : '400'
              }}
            >
              {link.name}
            </Link>
          ))}
          <ShoppingBag size={20} style={{ marginLeft: '10px', cursor: 'pointer' }} />
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
           {/* Managed via CSS in index.css or media queries below */}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
