import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus, Send, ShieldCheck } from 'lucide-react';
import ArabicWatermark from '../components/ArabicWatermark';

const Events = () => {
  const [formData, setFormData] = useState({ name: '', email: '', guests: '1' });

  const handleRSVP = (e) => {
    e.preventDefault();
    const message = `Hello Aliyah Concierge, I would like to RSVP for the Abuja Pop-Up.\n\nName: ${formData.name}\nEmail: ${formData.email}\nGuests: ${formData.guests}`;
    window.open(`https://wa.me/234000000000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="events-page" style={{ backgroundColor: 'var(--forest-green)', color: 'white' }}>
      
      {/* SECTION 1: TIMING & LOCATION (Centered Hero) */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px 60px' }}>
        <ArabicWatermark top="5%" right="-5%" size="35vw" opacity={0.03} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left: Timing & Location Card */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '60px 40px' }}>
              <h2 className="serif" style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '40px', letterSpacing: '0.1em' }}>Timing & Location</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}><Calendar size={24} color="var(--gold)" /> <p style={{ fontSize: '1.1rem' }}>Saturday, 16th May 2024</p></div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}><Clock size={24} color="var(--gold)" /> <p style={{ fontSize: '1.1rem' }}>2:00 PM – 8:00 PM</p></div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}><MapPin size={24} color="var(--gold)" /> <div><p style={{ fontSize: '1.1rem', fontWeight: '600' }}>Sarkinmota Autos</p><p style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: '5px' }}>Beside NNPC Mega Station, Central Area, Abuja.</p></div></div>
              </div>
              <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <button className="btn-gold" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>ADD TO CALENDAR <CalendarPlus size={18} /></button>
                <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: 'var(--champagne)', color: 'var(--forest-green)' }}>GET DIRECTIONS <ExternalLink size={18} /></button>
              </div>
            </motion.div>

            {/* Right: Floating Narrative */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{ border: '1px solid var(--gold)', padding: '50px', maxWidth: '450px', backgroundColor: 'rgba(21, 33, 27, 0.8)', backdropFilter: 'blur(10px)' }}>
              <p className="serif" style={{ fontSize: '1.6rem', lineHeight: '1.4', color: 'var(--champagne)' }}>"A celebration of heritage and silken artistry in the heart of Abuja."</p>
              <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--gold)', marginTop: '30px' }}></div>
              <p style={{ marginTop: '20px', fontSize: '0.8rem', letterSpacing: '0.2em', opacity: 0.5 }}>#ALIYAHINABUJA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE RSVP GUESTLIST */}
      <section className="section-padding" style={{ backgroundColor: 'black', position: 'relative' }}>
        <ArabicWatermark bottom="10%" left="5%" size="30vw" opacity={0.03} />
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--gold)' }}>Request Access</h2>
          <p style={{ opacity: 0.6, letterSpacing: '0.2em', marginTop: '10px', marginBottom: '60px' }}>THE GUESTLIST IS LIMITED</p>
          
          <form onSubmit={handleRSVP} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <input required type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', padding: '15px 0', color: 'white', outline: 'none' }} />
            <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', padding: '15px 0', color: 'white', outline: 'none' }} />
            <select onChange={(e) => setFormData({...formData, guests: e.target.value})} style={{ width: '100%', background: 'none', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', padding: '15px 0', color: 'white', outline: 'none' }}>
              <option value="1">1 Attendee</option>
              <option value="2">2 Attendees</option>
              <option value="VIP">VIP Request</option>
            </select>
            <button className="btn-gold" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>Request Invitation <Send size={18} /></button>
          </form>
          <div style={{ marginTop: '40px', opacity: 0.3, fontSize: '0.7rem' }}><ShieldCheck size={12} style={{ display: 'inline', marginRight: '5px' }} /> CONFIRMATION WILL BE SENT VIA WHATSAPP</div>
        </div>
      </section>

    </div>
  );
};

export default Events;
