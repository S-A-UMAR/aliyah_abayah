import React from 'react';
import { motion } from 'framer-motion';

const StickyBanner = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky-banner"
      style={{
        backgroundColor: '#D4AF37',
        color: '#1B2B24',
        padding: '10px 0',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: '700',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
    >
      <div className="container">
        Grand Opening Pop-Up Sale • Abuja • Saturday 16th May • 2:00 PM
      </div>
    </motion.div>
  );
};

export default StickyBanner;
