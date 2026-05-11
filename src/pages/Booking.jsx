import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, Check } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({ type: '', date: '', time: '' });

  const nextStep = () => setStep(s => s + 1);

  return (
    <div className="booking-page section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '10px' }}>Private Fitting</h1>
          <p style={{ opacity: 0.6, letterSpacing: '0.1em' }}>SCHEDULE YOUR ATELIER EXPERIENCE</p>
        </header>

        {/* Step Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ 
              width: '40px', height: '40px', borderRadius: '50%', 
              border: `1px solid ${step >= i ? 'var(--gold)' : 'rgba(212,175,55,0.2)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: step === i ? 'var(--gold)' : 'transparent',
              color: step === i ? 'var(--forest-green)' : step > i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease'
            }}>
              {step > i ? <Check size={18} /> : i}
            </div>
          ))}
        </div>

        <div className="booking-card" style={{ 
          backgroundColor: 'rgba(21, 33, 27, 0.4)', 
          padding: 'clamp(25px, 5vw, 60px)', 
          border: '1px solid rgba(212, 175, 55, 0.1)' 
        }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Choose Experience</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['In-Person Fitting (Abuja)', 'Virtual Style Session', 'Bespoke Bridal Consultation'].map(t => (
                    <button 
                      key={t}
                      onClick={() => { setBookingData({...bookingData, type: t}); nextStep(); }}
                      style={{ 
                        padding: '20px', textAlign: 'left', background: 'none', 
                        border: '1px solid rgba(212, 175, 55, 0.2)', color: 'white',
                        cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex',
                        justifyContent: 'space-between', alignItems: 'center'
                      }}
                      className="hover-gold-border"
                    >
                      {t} <ChevronRight size={18} color="var(--gold)" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Select Preferred Date</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px' }}>
                  {['May 17', 'May 18', 'May 19', 'May 20'].map(d => (
                    <button 
                      key={d}
                      onClick={() => { setBookingData({...bookingData, date: d}); nextStep(); }}
                      style={{ 
                        padding: '25px', background: 'none', border: '1px solid rgba(212, 175, 55, 0.2)', 
                        color: 'white', cursor: 'pointer', textAlign: 'center'
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} style={{ marginTop: '30px', color: 'var(--gold)', background: 'none', border: 'none', textDecoration: 'underline' }}>Back</button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Final Details</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="text" placeholder="Full Name" style={{ background: 'none', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '15px', color: 'white' }} />
                  <input type="tel" placeholder="WhatsApp Phone Number" style={{ background: 'none', border: '1px solid rgba(212, 175, 55, 0.3)', padding: '15px', color: 'white' }} />
                  <div style={{ padding: '20px', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderLeft: '3px solid var(--gold)' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--gold)' }}>SUMMARY</p>
                    <p style={{ marginTop: '5px' }}>{bookingData.type} • {bookingData.date} @ Abuja Atelier</p>
                  </div>
                  <button className="btn-gold" style={{ padding: '18px' }} onClick={() => window.open('https://wa.me/234000000000?text=Booking Request', '_blank')}>Confirm Appointment</button>
                </div>
                <button onClick={() => setStep(2)} style={{ marginTop: '30px', color: 'var(--gold)', background: 'none', border: 'none', textDecoration: 'underline' }}>Back</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .hover-gold-border:hover {
          border-color: var(--gold) !important;
          background-color: rgba(212, 175, 55, 0.05) !important;
        }
      `}</style>
    </div>
  );
};

export default Booking;
