import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Send, Heart, MessageCircle } from 'lucide-react';

const Social = () => {
  const posts = [
    { id: 1, type: 'video', url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=400' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400' },
    { id: 4, type: 'video', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400' },
    { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1560060134-2247bc9f5763?auto=format&fit=crop&q=80&w=400' },
    { id: 6, type: 'video', url: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="social-page section-padding">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '20px' }}>Social Hub</h1>
          <p style={{ letterSpacing: '0.4em', opacity: 0.6, textTransform: 'uppercase' }}>Join the Conversation</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
          {/* Instagram Side */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <Camera className="gold-text" size={32} />
              <div>
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>@aliyah_abayah</h2>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>INSTAGRAM FEED</p>
              </div>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '10px',
              backgroundColor: 'rgba(245, 245, 220, 0.05)',
              padding: '10px'
            }}>
              {posts.map((post) => (
                <div key={post.id} style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
                  <img 
                    src={post.url} 
                    alt="Social Post" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ 
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: 'rgba(0,0,0,0.4)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    opacity: 0, transition: 'opacity 0.3s ease' 
                  }} className="post-overlay">
                    <Heart size={18} fill="white" />
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>Follow Us</button>
          </div>

          {/* TikTok Side */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--forest-green)', fontWeight: 'bold' }}>T</span>
              </div>
              <div>
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>Aliyah Behind the Scenes</h2>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>TIKTOK MOMENTS</p>
              </div>
            </div>

            <div style={{ 
              height: '500px', 
              backgroundColor: 'rgba(0,0,0,0.3)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid rgba(245, 245, 220, 0.1)',
              position: 'relative'
            }}>
              <p style={{ opacity: 0.5, fontStyle: 'italic' }}>Live TikTok Feed Integration Placeholder</p>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                   <Heart size={16} /> 12.4k
                   <MessageCircle size={16} /> 432
                </div>
                <p style={{ fontSize: '0.8rem' }}>The flow of our Noor Abaya in natural light. #aliyahabaya #luxuryfashion</p>
              </div>
            </div>
            <button className="btn-gold" style={{ width: '100%', marginTop: '20px' }}>View on TikTok</button>
          </div>
        </div>
      </div>
      
      <style>{`
        .post-overlay:hover { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default Social;
