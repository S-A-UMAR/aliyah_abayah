import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import logo from '../pages/logo.png';
import { CONFIG } from '../constants';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--forest-green)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ textAlign: 'center' }}
      >
        <img src={logo} alt="Aliyah Logo" style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1px solid var(--gold)', marginBottom: '30px' }} />
        <h2 className="serif" style={{ fontSize: '2.5rem', letterSpacing: '0.2em' }}>ALIYAH</h2>
        <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem' }}>علياه</span>
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: '100px' }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ height: '1px', backgroundColor: 'var(--gold)', marginTop: '40px' }}
      />
    </motion.div>
  );
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cinematic load time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Global Concierge Button */}
      <motion.a
        href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Hello Aliyah Concierge, I have a question about the collection.`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        style={{
          position: 'fixed', bottom: '30px', right: '30px', zIndex: 4000,
          backgroundColor: 'var(--gold)', color: 'var(--forest-green)',
          width: '60px', height: '60px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
          cursor: 'pointer'
        }}
      >
        <MessageCircle size={30} />
      </motion.a>

      <Navbar />
          <CartDrawer />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </>
      )}

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
        main {
          flex: 1;
        }
        
        /* Global Reveal Animation Class */
        .reveal-text {
          overflow: hidden;
          display: block;
        }
        
        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Gold Liquid Button Hover */
        .btn-gold, .btn-primary {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .btn-gold::after, .btn-primary::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(255, 255, 255, 0.1);
          z-index: -1;
          transition: all 0.4s ease;
        }
        
        .btn-gold:hover::after, .btn-primary:hover::after {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
