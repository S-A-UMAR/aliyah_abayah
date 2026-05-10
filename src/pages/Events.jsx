import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const Events = () => {
  const eventDetails = {
    title: 'Abuja Pop-Up Sale',
    date: 'Saturday, 16th May 2026',
    time: '2:00 PM - 8:00 PM',
    location: 'Sarkinmota Autos',
    address: 'Beside NNPC Mega Station, Central Area, Abuja',
    mapLink: 'https://www.google.com/maps/search/Sarkinmota+Autos+Central+Area+Abuja'
  };

  const handleAddToCalendar = () => {
    // Basic .ics generation or simple alert for demo
    const event = {
      title: 'Aliyah Abaya Grand Opening',
      description: 'Grand Opening Pop-Up Sale in Abuja',
      location: eventDetails.address,
      start: '20260516T140000',
      end: '20260516T200000'
    };
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
DTSTART:${event.start}
DTEND:${event.end}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'aliyah-abaya-launch.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="events-page section-padding">
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: 'var(--gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.8rem' }}>The Grand Opening</span>
            <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginTop: '20px' }}>Aliyah Abuja</h1>
          </header>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '60px',
            alignItems: 'center'
          }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.05)', padding: '40px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <Calendar className="gold-text" size={24} />
                    <span style={{ fontSize: '1.2rem' }}>{eventDetails.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Clock className="gold-text" size={24} />
                    <span>{eventDetails.time}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '10px' }}>
                    <MapPin className="gold-text" size={24} />
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{eventDetails.location}</div>
                      <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '5px' }}>{eventDetails.address}</p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <button onClick={handleAddToCalendar} className="btn-gold" style={{ width: '100%' }}>
                    Add to Calendar
                  </button>
                  <a 
                    href={eventDetails.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary" 
                    style={{ width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    Get Directions <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Event Space" 
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                left: '-20px', 
                backgroundColor: 'var(--forest-green)', 
                padding: '20px', 
                border: '1px solid var(--gold)',
                maxWidth: '250px'
              }}>
                <p className="serif" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                  "Experience the fabric of elegance in person."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="section-padding" style={{ textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '30px' }}>What to Expect</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
              <div>
                <h4 className="gold-text" style={{ marginBottom: '10px' }}>Exclusive Preview</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Be the first to see and try on our unreleased Eid collection.</p>
              </div>
              <div>
                <h4 className="gold-text" style={{ marginBottom: '10px' }}>Styling Concierge</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Personal styling sessions with Aliyah to find your perfect fit.</p>
              </div>
              <div>
                <h4 className="gold-text" style={{ marginBottom: '10px' }}>Complimentary Treats</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Enjoy artisan coffee and dates while you shop in luxury.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
