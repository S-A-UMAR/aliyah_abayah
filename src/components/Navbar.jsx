import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Heart, Globe, Instagram, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { setIsCartOpen, cart } = useCart();
  const { wishlist } = useWishlist();
  const { currency, toggleCurrency } = useCurrency();

  const navLinks = [
    { name: 'The Atelier', arabic: 'أتيليه', path: '/atelier', desc: 'SHOP THE LATEST SILKS' },
    { name: 'Lookbook', arabic: 'كتالوج', path: '/lookbook', desc: 'CINEMATIC STORYTELLING' },
    { name: 'Our Heritage', arabic: 'تراث', path: '/heritage', desc: 'THE ART OF THE ABAYA' },
    { name: 'Abuja Event', arabic: 'فعاليات', path: '/events', desc: 'THE GRAND OPENING' },
    { name: 'Private Fitting', arabic: 'حجز', path: '/booking', desc: 'BESPOKE CONSULTATIONS' },
    { name: 'Social Hub', arabic: 'مجتمع', path: '/social', desc: 'JOIN THE COMMUNITY' },
    { name: 'Client Care', arabic: 'رعاية', path: '/care', desc: 'SUPPORT & SIZING' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav style={{ 
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 5000,
        backgroundColor: 'rgba(27, 43, 36, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        height: '90px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
          
          {/* Left: Menu Trigger */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              onClick={() => setIsOpen(true)}
              style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <Menu size={24} />
              <span className="desktop-only" style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Menu</span>
            </button>
          </div>

          {/* Center: Pure Brand Identity */}
          <Link to="/" style={{ textAlign: 'center', padding: '0 5px', flex: 3 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', whiteSpace: 'nowrap' }}>
              <span className="serif" style={{ fontSize: 'clamp(1rem, 5vw, 1.8rem)', letterSpacing: '0.15em', color: 'var(--gold)' }}>ALIYAH</span>
              <span style={{ opacity: 0.2, color: 'var(--gold)', fontSize: '0.8rem' }}>|</span>
              <span style={{ fontSize: 'clamp(0.7rem, 4vw, 1.2rem)', color: 'var(--gold)', opacity: 0.8 }}>علياه</span>
            </div>
            <div className="desktop-only" style={{ fontSize: '0.55rem', letterSpacing: '0.4em', marginTop: '2px', opacity: 0.6, color: 'var(--champagne)' }}>ABAYA FLAGSHIP</div>
          </Link>

          {/* Right: Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'flex-end' }}>
            <button onClick={toggleCurrency} className="desktop-only" style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              {currency}
            </button>
            <Link to="/wishlist" style={{ color: 'var(--gold)' }}>
              <Heart size={20} fill={wishlist.length > 0 ? "var(--gold)" : "none"} strokeWidth={1.5} />
            </Link>
            <button onClick={() => setIsCartOpen(true)} style={{ position: 'relative', color: 'var(--gold)' }}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span style={{ 
                  position: 'absolute', top: '-6px', right: '-8px', 
                  backgroundColor: 'var(--gold)', color: 'var(--forest-green)',
                  fontSize: '0.5rem', width: '14px', height: '14px', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', fontWeight: 'bold' 
                }}>
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen High-Fashion Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', zIndex: 6000 }}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              style={{ 
                position: 'fixed', top: 0, left: 0, width: '100%', maxWidth: 'min(550px, 90vw)', height: '100vh',
                backgroundColor: 'var(--forest-green)', zIndex: 6001,
                display: 'flex', flexDirection: 'column', padding: 'clamp(80px, 15vh, 120px) clamp(20px, 8vw, 60px) 40px',
                borderRight: '1px solid rgba(212, 175, 55, 0.1)',
                overflowY: 'auto'
              }}
            >
              <button 
                onClick={() => setIsOpen(false)} 
                style={{ position: 'absolute', top: '40px', left: 'clamp(20px, 8vw, 60px)', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <X size={24} />
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Close</span>
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
                {navLinks.map((link, idx) => (
                  <motion.div 
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)} 
                      style={{ group: 'true', display: 'block' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--gold)', opacity: 0.3 }}>0{idx + 1}</span>
                        <h2 className="serif" style={{ 
                          fontSize: 'clamp(2rem, 5vw, 3rem)', 
                          color: isActive(link.path) ? 'var(--gold)' : 'white',
                          lineHeight: '1.1',
                          transition: 'all 0.3s ease'
                        }}>
                          {link.name}
                        </h2>
                      </div>
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '45px', marginTop: '5px' }}>
                         <span style={{ fontSize: '0.9rem', color: 'var(--gold)', letterSpacing: '0.2em', opacity: 0.6 }}>{link.arabic}</span>
                         <span className="desktop-only" style={{ fontSize: '0.6rem', color: 'white', opacity: 0.3, letterSpacing: '0.1em' }}>— {link.desc}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Menu Branding */}
              <div style={{ marginTop: '50px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', paddingTop: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '25px' }}>
                    <Instagram size={22} color="var(--gold)" />
                    <MessageCircle size={22} color="var(--gold)" />
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', opacity: 0.4 }}>LOCATION</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>ABUJA ATELIER</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
