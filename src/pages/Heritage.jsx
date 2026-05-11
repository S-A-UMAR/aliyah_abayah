import React from 'react';
import { motion } from 'framer-motion';
import abaya1 from '../assets/abayas/aliyah_signature_abaya_1_1778404588057.png';
import abaya2 from '../assets/abayas/aliyah_occasion_abaya_2_1778404602040.png';
import abaya3 from '../assets/abayas/aliyah_essential_abaya_3_1778404782924.png';
import abaya4 from '../assets/abayas/aliyah_lifestyle_abaya_4_1778404794973.png';
import abaya5 from '../assets/abayas/aliyah_abaya_5_1778405359888.png';

const Heritage = () => {
  return (
    <div className="heritage-page">
      {/* Hero Section */}
      <section style={{ 
        height: '80vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--forest-green)'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3 }}>
          <img src={abaya1} alt="Heritage Silk" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ color: 'var(--gold)', letterSpacing: '0.5em', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '20px' }}
          >
            Since 2024
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="serif" 
            style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: '0.9' }}
          >
            The Legacy
          </motion.h1>
        </div>
      </section>

      {/* The Vision */}
      <section className="section-padding" style={{ backgroundColor: 'white', color: 'var(--forest-green)' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem' }}>The Vision</span>
            <h2 className="serif" style={{ fontSize: '3.5rem', marginTop: '20px', marginBottom: '40px', color: 'var(--forest-green)' }}>A Sanctuary of Silk</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '30px', opacity: 0.9 }}>
              Aliyah Abaya was born from a singular obsession: to create a garment that feels like a sanctuary. In a world of noise, we offer silence. In a world of fast-fashion, we offer heritage.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.7 }}>
              Every piece is a dialogue between traditional modesty and modern silhouette. We don't just dress the woman; we honor her presence.
            </p>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ position: 'relative', padding: '40px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '70%', height: '70%', border: '1px solid var(--gold)', zIndex: 1 }}></div>
              <img src={abaya5} alt="Signature Craft" style={{ position: 'relative', zIndex: 2, width: '100%', height: '600px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* The Craft */}
      <section className="section-padding" style={{ backgroundColor: 'var(--forest-green)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '4rem', marginBottom: '80px' }}>The Craftsmanship</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { title: 'The Palette', desc: 'Our Signature Forest Green represents growth, life, and the gardens of paradise.' },
              { title: 'The Gold Thread', desc: 'Every stitch is reinforced with premium gold-trace threading for a royal finish.' },
              { title: 'The Drape', desc: 'We source only from heritage mills to ensure a weight that falls perfectly.' }
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <h3 className="serif" style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '20px' }}>{item.title}</h3>
                <p style={{ opacity: 0.7, lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Fabric Library (Sensory Experience) */}
      <section className="section-padding" style={{ backgroundColor: '#111814', color: 'white' }}>
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.75rem' }}>Tactile Heritage</span>
            <h2 className="serif" style={{ fontSize: '3.5rem', marginTop: '20px' }}>The Fabric Library</h2>
            <p style={{ maxWidth: '600px', margin: '30px auto', opacity: 0.6, lineHeight: '1.8' }}>
              We source our silks and crepes from heritage mills across the globe, ensuring each Aliyah Abaya carries the weight of true luxury.
            </p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: 'Italian Armani Silk', weight: 'Ultralight', feel: 'Liquid Motion', img: abaya2 },
              { name: 'Heritage Nida', weight: 'Mid-weight', feel: 'Structured Grace', img: abaya3 },
              { name: 'Bespoke Organza', weight: 'Architectural', feel: 'Gold Threaded', img: abaya4 }
            ].map((fabric, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                style={{ position: 'relative', overflow: 'hidden', height: '400px' }}
              >
                <img 
                  src={fabric.img} 
                  alt={fabric.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.5s ease' }} 
                  className="fabric-macro"
                />
                <div style={{ 
                  position: 'absolute', bottom: 0, left: 0, right: 0, 
                  padding: '40px', background: 'linear-gradient(to top, rgba(15,25,20,0.9), transparent)',
                  zIndex: 2
                }}>
                  <h3 className="serif" style={{ fontSize: '1.5rem', color: 'var(--gold)' }}>{fabric.name}</h3>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '10px', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.7 }}>
                    <span>{fabric.weight}</span>
                    <span>•</span>
                    <span>{fabric.feel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          .fabric-macro:hover {
            transform: scale(1.2) rotate(1deg);
          }
        `}</style>
      </section>

      {/* Quote */}
      <section className="section-padding" style={{ backgroundColor: 'var(--champagne)', color: 'var(--forest-green)', textAlign: 'center' }}>
        <div className="container">
          <p className="serif" style={{ fontSize: '2.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto' }}>
            "Modesty is the highest form of refinement."
          </p>
          <div style={{ width: '100px', height: '1px', backgroundColor: 'var(--gold)', margin: '40px auto' }}></div>
          <p style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--gold)' }}>The Aliyah Philosophy</p>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
