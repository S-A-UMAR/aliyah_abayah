import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowDown, ChevronRight, X } from 'lucide-react';

import abaya1 from '../assets/abayas/aliyah_signature_abaya_1_1778404588057.png';
import abaya2 from '../assets/abayas/aliyah_occasion_abaya_2_1778404602040.png';
import abaya3 from '../assets/abayas/aliyah_essential_abaya_3_1778404782924.png';
import abaya4 from '../assets/abayas/aliyah_lifestyle_abaya_4_1778404794973.png';
import abaya5 from '../assets/abayas/aliyah_abaya_5_1778405359888.png';
import abaya6 from '../assets/abayas/aliyah_abaya_6_1778405437446.png';

const looks = [
  { 
    id: 1, 
    img: abaya1, 
    title: 'The Signature Drape', 
    narrative: 'A dialogue between gold and silk. Crafted for the moments that define a lifetime.',
    location: 'Abuja Central',
    category: 'Signature'
  },
  { 
    id: 2, 
    img: abaya2, 
    title: 'Midnight Whispers', 
    narrative: 'When the sun sets, the Italian Armani silk begins its own light show.',
    location: 'Private Studio',
    category: 'Occasion'
  },
  { 
    id: 3, 
    img: abaya3, 
    title: 'Desert Grace', 
    narrative: 'Breathable simplicity. A silhouette that honors the wind and the wearer.',
    location: 'Heritage Suite',
    category: 'Essentials'
  },
  { 
    id: 4, 
    img: abaya4, 
    title: 'Golden Hour', 
    narrative: 'Radiance in every stitch. For the grand entrances that leave a legacy.',
    location: 'The Atrium',
    category: 'Signature'
  },
  { 
    id: 5, 
    img: abaya5, 
    title: 'Royal Presence', 
    narrative: 'The weight of prestige. A double-layered masterpiece for the discerning.',
    location: 'Elite Residency',
    category: 'Occasion'
  },
  { 
    id: 6, 
    img: abaya6, 
    title: 'Modern Heritage', 
    narrative: 'Refined for the streets, honored by the past. A daily sanctuary.',
    location: 'Abuja Arts',
    category: 'Essentials'
  }
];

const LookSection = ({ look, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} style={{ height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: 'black' }}>
      <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', y, scale }}>
        <img src={look.img} alt={look.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
      </motion.div>
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 40%, transparent 60%, rgba(0,0,0,0.4))' }} />

      <motion.div 
        style={{ position: 'absolute', bottom: 'clamp(50px, 10vh, 100px)', left: 'clamp(30px, 5vw, 100px)', zIndex: 10, opacity, maxWidth: '600px' }}
      >
        <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem', display: 'block', marginBottom: '20px' }}>
          {look.location} • {look.category}
        </span>
        <h2 className="serif" style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'white', lineHeight: '0.9', marginBottom: '30px' }}>
          {look.title}
        </h2>
        <p style={{ color: 'white', opacity: 0.8, fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>
          {look.narrative}
        </p>
        <Link to="/atelier" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', padding: '20px 40px', textDecoration: 'none' }}>
          <ShoppingBag size={20} /> Shop the Look
        </Link>
      </motion.div>

      {index === 0 && (
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: 'var(--gold)', zIndex: 10, textAlign: 'center' }}
        >
          <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '10px' }}>Scroll to Explore</span>
          <ArrowDown size={20} style={{ margin: '0 auto' }} />
        </motion.div>
      )}
    </section>
  );
};

const Lookbook = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="lookbook-v2" style={{ backgroundColor: 'black' }}>
      {/* Progress Bar */}
      <motion.div
        style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, height: '4px', 
          backgroundColor: 'var(--gold)', transformOrigin: '0%', zIndex: 100,
          scaleX
        }}
      />

      <div className="scroll-container">
        {looks.map((look, i) => (
          <LookSection key={look.id} look={look} index={i} />
        ))}
      </div>

      {/* Floating Back to Home */}
      <Link to="/" style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 100, color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={18} />
         </div>
      </Link>

      <style>{`
        .lookbook-v2 {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }
        section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        footer { display: none !important; }
        nav { display: none !important; }
      `}</style>
    </div>
  );
};

export default Lookbook;
