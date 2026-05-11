import React from 'react';
import { motion } from 'framer-motion';

const ArabicWatermark = ({ text = "علياه", top, left, right, bottom, opacity = 0.03, size = "30vw", rotate = -10 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: opacity,
        y: [0, -20, 0],
        rotate: [rotate, rotate + 2, rotate]
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{
        position: 'absolute',
        top, left, right, bottom,
        fontSize: size,
        color: 'var(--gold)',
        pointerEvents: 'none',
        zIndex: 0,
        fontFamily: 'serif',
        whiteSpace: 'nowrap',
        userSelect: 'none'
      }}
    >
      {text}
    </motion.div>
  );
};

export default ArabicWatermark;
