import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, Sparkles, Truck, RefreshCcw, ChevronDown } from 'lucide-react';

const AccordionItem = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)', marginBottom: '10px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', 
          padding: '25px 0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          color: 'var(--champagne)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Icon size={22} color="var(--gold)" />
          <span className="serif" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', letterSpacing: '0.05em' }}>{title}</span>
        </div>
        <ChevronDown 
          size={18} 
          color="var(--gold)" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.4s ease' }} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '30px', opacity: 0.8, lineHeight: '1.8', fontSize: '1rem' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ClientCare = () => {
  return (
    <div className="client-care-page section-padding">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.span style={{ color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem' }}>Trust & Support</motion.span>
          <motion.h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginTop: '15px' }}>Client Care</motion.h1>
        </header>

        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          <AccordionItem title="The Perfect Fit Guide" icon={Ruler}>
            <p style={{ marginBottom: '25px' }}>Please use your total height to determine the correct Abaya length. For a more traditional floor-grazing look, choose one size up.</p>
            
            {/* Desktop Table */}
            <div className="desktop-only" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', color: 'var(--gold)' }}>
                    <th style={{ padding: '15px' }}>Height (ft)</th>
                    <th style={{ padding: '15px' }}>Abaya Size</th>
                    <th style={{ padding: '15px' }}>Length (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { h: "5'0 - 5'2", s: "52", l: "52\"" },
                    { h: "5'3 - 5'4", s: "54", l: "54\"" },
                    { h: "5'5 - 5'6", s: "56", l: "56\"" },
                    { h: "5'7 - 5'8", s: "58", l: "58\"" },
                    { h: "5'9 - 6'0", s: "60", l: "60\"" }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.05)' }}>
                      <td style={{ padding: '15px' }}>{row.h}</td>
                      <td style={{ padding: '15px' }}>{row.s}</td>
                      <td style={{ padding: '15px' }}>{row.l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { h: "5'0 - 5'2", s: "52", l: "52\"" },
                { h: "5'3 - 5'4", s: "54", l: "54\"" },
                { h: "5'5 - 5'6", s: "56", l: "56\"" },
                { h: "5'7 - 5'8", s: "58", l: "58\"" },
                { h: "5'9 - 6'0", s: "60", l: "60\"" }
              ].map((row, i) => (
                <div key={i} style={{ padding: '15px', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ opacity: 0.6 }}>Height {row.h}</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>Size {row.s}</span>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Silk & Fabric Care" icon={Sparkles}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '10px' }}>Daily Care</h4>
                <ul style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
                  <li>Steam only. No direct heat.</li>
                  <li>Hang on wide, padded hangers.</li>
                  <li>Store in breathable garment bags.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--gold)', marginBottom: '10px' }}>Atelier Advice</h4>
                <p style={{ fontSize: '0.9rem' }}>Italian Armani Silk is liquid in nature. Avoid contact with rough surfaces and harsh perfumes.</p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Shipping & Returns" icon={Truck}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>Abuja deliveries are handled by our private atelier concierge. Nationwide and International shipping via DHL Express.</p>
              <div style={{ padding: '15px', backgroundColor: 'rgba(212, 175, 55, 0.05)', fontSize: '0.9rem' }}>
                Returns for sizing exchanges must be initiated within 7 days of delivery. Custom pieces are final sale.
              </div>
            </div>
          </AccordionItem>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ClientCare;
