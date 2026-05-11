import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram, MessageCircle } from 'lucide-react';
import ArabicWatermark from '../components/ArabicWatermark';

// Assets
import heroAbaya from '../assets/abayas/aliyah_signature_abaya_1_1778404588057.png';
import movementAbaya from '../assets/abayas/aliyah_lifestyle_abaya_4_1778404794973.png';
import collectionAbaya from '../assets/abayas/aliyah_occasion_abaya_2_1778404602040.png';

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundColor: 'var(--forest-green)', color: 'white' }}>
      
      {/* SECTION 1: THE HERO MASTERPIECE */}
      <section style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img src={heroAbaya} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 20%, var(--forest-green) 90%)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.8, y: 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '3.5rem', color: 'var(--gold)', fontFamily: 'serif' }}>علياه</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="serif" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', letterSpacing: '0.4em', color: 'white', margin: '0' }}>ALIYAH</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 1 }} style={{ letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem', marginTop: '30px' }}>CRAFTING TIMELESS ELEGANCE FOR THE MODERN WOMAN.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '60px' }}>
            <Link to="/atelier" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--forest-green)', padding: '18px 45px' }}>SHOP COLLECTION</Link>
            <Link to="/lookbook" className="btn-gold" style={{ padding: '18px 45px' }}>VIEW LOOKBOOK</Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MOVEMENT (Image Left, Text Right) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--forest-green)', color: 'white', position: 'relative', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <ArabicWatermark top="10%" left="-5%" size="30vw" opacity={0.05} />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ position: 'relative' }}>
                 <img src={movementAbaya} alt="Movement" style={{ width: '100%', height: '80vh', objectFit: 'cover', border: '1px solid var(--gold)' }} />
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.75rem' }}>THE CRAFTSMANSHIP</span>
              <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '30px 0', lineHeight: '1.1', color: 'white' }}>Designed for <br/> Movement</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.7, marginBottom: '40px' }}>
                Each Aliyah Abaya is a study in fluidity. We select only the finest Italian Armani Silks that breathe and move with you, ensuring that elegance never compromises comfort.
              </p>
              <Link to="/heritage" className="btn-gold">Our Craftsmanship</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PIECE (Full Width Moody) */}
      <section style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
        <img src={collectionAbaya} alt="Featured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(21, 33, 27, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <div style={{ textAlign: 'center' }}>
              <h2 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: 'white' }}>The Sahara Collection</h2>
              <p style={{ letterSpacing: '0.4em', color: 'var(--gold)', marginTop: '20px' }}>SUMMER ATELIER 2024</p>
              <Link to="/atelier" className="btn-gold" style={{ marginTop: '40px', display: 'inline-block' }}>Shop Collection</Link>
           </div>
        </div>
      </section>

      {/* SECTION 4: THE INNER CIRCLE (Newsletter) */}
      <section className="section-padding" style={{ backgroundColor: 'black', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem' }}>THE INNER CIRCLE</span>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '30px 0' }}>Join the Private List</h2>
          <p style={{ opacity: 0.6, marginBottom: '50px', lineHeight: '1.8' }}>Receive invitations to private viewings and early access to our most exclusive releases directly via WhatsApp.</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.elements[0].value;
              const message = `Hello Aliyah Concierge, I would like to join the inner circle.\n\nEmail: ${email}`;
              window.open(`https://wa.me/234000000000?text=${encodeURIComponent(message)}`, '_blank');
            }}
            style={{ display: 'flex', gap: '10px', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}
          >
            <input required type="email" placeholder="YOUR EMAIL" style={{ flex: 1, padding: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', color: 'white', outline: 'none' }} />
            <button className="btn-gold" style={{ padding: '20px 40px' }}>JOIN</button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
