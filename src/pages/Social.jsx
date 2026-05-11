import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Send, Heart, MessageCircle } from 'lucide-react';

import abaya1 from '../assets/abayas/aliyah_signature_abaya_1_1778404588057.png';
import abaya2 from '../assets/abayas/aliyah_occasion_abaya_2_1778404602040.png';
import abaya3 from '../assets/abayas/aliyah_essential_abaya_3_1778404782924.png';
import abaya4 from '../assets/abayas/aliyah_lifestyle_abaya_4_1778404794973.png';
import abaya5 from '../assets/abayas/aliyah_abaya_5_1778405359888.png';
import abaya6 from '../assets/abayas/aliyah_abaya_6_1778405437446.png';

const Social = () => {
  const posts = [
    { id: 1, type: 'video', url: abaya1 },
    { id: 2, type: 'image', url: abaya2 },
    { id: 3, type: 'image', url: abaya3 },
    { id: 4, type: 'video', url: abaya4 },
    { id: 5, type: 'image', url: abaya5 },
    { id: 6, type: 'video', url: abaya6 },
  ];

  return (
    <div className="social-page section-padding">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem' }}
          >
            Our Community
          </motion.span>
          <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginTop: '20px', marginBottom: '20px' }}>Social Hub</h1>
          <p style={{ letterSpacing: '0.2em', opacity: 0.6, textTransform: 'uppercase', fontSize: '0.9rem' }}>Join the World of Aliyah</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
          {/* Instagram Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <Camera className="gold-text" size={28} />
              </div>
              <div>
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>@aliyah_abayah</h2>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, letterSpacing: '0.1em' }}>42.5K FOLLOWERS</p>
              </div>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '12px',
              padding: '12px',
              backgroundColor: 'rgba(245, 245, 220, 0.02)',
              border: '1px solid rgba(245, 245, 220, 0.05)'
            }}>
              {posts.map((post, idx) => (
                <motion.div 
                  key={post.id} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 0.98 }}
                  style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden', cursor: 'pointer' }}
                >
                  <img 
                    src={post.url} 
                    alt="Social Post" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: 'rgba(27, 43, 36, 0.6)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    opacity: 0, transition: 'opacity 0.4s ease' 
                  }} className="post-overlay">
                    <Heart size={20} fill="#D4AF37" color="#D4AF37" />
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '30px' }}>Follow on Instagram</button>
          </motion.div>

          {/* TikTok Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '15px', borderRadius: '50%' }}>
                <Send className="gold-text" size={28} />
              </div>
              <div>
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>aliyah_btz</h2>
                <p style={{ fontSize: '0.75rem', opacity: 0.5, letterSpacing: '0.1em' }}>BEHIND THE SCENES</p>
              </div>
            </div>

            <div style={{ 
              height: '500px', 
              backgroundColor: '#15211b', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid rgba(245, 245, 220, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ 
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url("${abaya4}")`,
                backgroundSize: 'cover',
                opacity: 0.15,
                filter: 'blur(5px)'
              }}></div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ zIndex: 1, color: 'var(--gold)' }}
              >
                <div style={{ width: '60px', height: '60px', border: '2px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '15px solid var(--gold)', marginLeft: '5px' }}></div>
                </div>
              </motion.div>
              <p style={{ opacity: 0.5, fontStyle: 'italic', marginTop: '20px', zIndex: 1, fontSize: '0.9rem' }}>Preview our latest fabric flow</p>
            </div>
            <button className="btn-gold" style={{ width: '100%', marginTop: '30px' }}>Join us on TikTok</button>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .post-overlay:hover { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default Social;
