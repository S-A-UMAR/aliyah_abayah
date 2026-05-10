import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noor Abaya',
    category: 'Signature',
    price: '₦85,000',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Midnight Silk',
    category: 'Occasion',
    price: '₦120,000',
    image: 'https://images.unsplash.com/photo-1560060134-2247bc9f5763?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1572804013307-f9a8a97ec03b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Desert Rose',
    category: 'Essentials',
    price: '₦65,000',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'Lumina Kaftan',
    category: 'Signature',
    price: '₦95,000',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    name: 'Onyx Grace',
    category: 'Occasion',
    price: '₦145,000',
    image: 'https://images.unsplash.com/photo-1539109132374-348214a3c33b?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    name: 'Sandstone Set',
    category: 'Essentials',
    price: '₦75,000',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800'
  }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Aliyah Abaya, I would like to inquire about the ${product.name} from the ${product.category} collection.`);
    window.open(`https://wa.me/234000000000?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ marginBottom: '40px' }}
    >
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden', backgroundColor: 'rgba(245, 245, 220, 0.05)' }}>
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              style={{ 
                position: 'absolute', 
                bottom: '20px', 
                left: '20px', 
                right: '20px', 
                zIndex: 2 
              }}
            >
              <button 
                onClick={handleWhatsApp}
                className="btn-gold" 
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              >
                Buy via WhatsApp <MessageCircle size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)' }}>{product.category}</span>
        <h3 className="serif" style={{ fontSize: '1.4rem', marginTop: '5px' }}>{product.name}</h3>
        <p style={{ opacity: 0.8, marginTop: '5px' }}>{product.price}</p>
      </div>
    </motion.div>
  );
};

const Atelier = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Signature', 'Occasion', 'Essentials'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="atelier-page section-padding">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '20px' }}>The Atelier</h1>
          <p style={{ letterSpacing: '0.1em', opacity: 0.6 }}>CURATED COLLECTIONS FOR EVERY MOMENT</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{ 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: filter === cat ? 'var(--gold)' : 'var(--champagne)',
                  borderBottom: filter === cat ? '1px solid var(--gold)' : '1px solid transparent',
                  paddingBottom: '5px'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Atelier;
