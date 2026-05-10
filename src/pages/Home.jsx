import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('May 16, 2026 14:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ 
        height: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Overlay - Placeholder for Video/Image */}
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, bottom: 0, 
          background: 'linear-gradient(rgba(27, 43, 36, 0.6), rgba(27, 43, 36, 0.8)), url("https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}></div>

        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '0.3em', marginBottom: '10px' }}
          >
            ALIYAH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '40px' }}
          >
            Timeless Elegance. Made For You.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="btn-primary"
          >
            Explore Collection
          </motion.button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="section-padding" style={{ backgroundColor: 'rgba(245, 245, 220, 0.02)' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>The Grand Launch</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '60px' }}>
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((unit) => (
              <div key={unit.label} style={{ minWidth: '80px' }}>
                <div style={{ fontSize: '3rem', fontWeight: '300', color: 'var(--gold)' }}>{String(unit.value).padStart(2, '0')}</div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>{unit.label}</div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ marginBottom: '30px', opacity: 0.8 }}>Be the first to know when our digital atelier opens and receive an exclusive invitation to the Abuja Pop-Up Sale.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: 1, 
                  background: 'rgba(245, 245, 220, 0.05)', 
                  border: '1px solid rgba(245, 245, 220, 0.2)', 
                  color: 'var(--champagne)', 
                  padding: '15px 20px',
                  outline: 'none'
                }} 
              />
              <button className="btn-gold" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Join <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '30px' }}>Designed for Movement</h2>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem', opacity: 0.8 }}>
              Each Aliyah Abaya is a study in fluidity. We select only the finest fabrics that breathe and move with you, ensuring that elegance never compromises comfort.
            </p>
            <p style={{ opacity: 0.6 }}>
              From our Signature collection to our Occasion wear, every piece is meticulously crafted in our atelier to meet the standards of the discerning woman.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
             <img 
               src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1000" 
               alt="Abaya Fabric" 
               style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '2px' }}
             />
             <div style={{ 
               position: 'absolute', 
               top: '-20px', 
               right: '-20px', 
               width: '100%', 
               height: '100%', 
               border: '1px solid var(--gold)', 
               zIndex: -1 
             }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
