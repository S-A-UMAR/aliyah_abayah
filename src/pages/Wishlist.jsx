import React from 'react';
import { motion } from 'framer-motion';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { convertPrice } = useCurrency();

  return (
    <div className="wishlist-page section-padding">
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Your Curated</span>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginTop: '15px' }}>Private Vault</h1>
          <p style={{ opacity: 0.6, marginTop: '10px' }}>YOUR SAVED PIECES FOR THE FUTURE</p>
        </header>

        {wishlist.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 0', opacity: 0.4 }}>
            <Heart size={60} style={{ marginBottom: '30px', strokeWidth: 1 }} />
            <p className="serif" style={{ fontSize: '1.5rem' }}>Your vault is empty.</p>
            <Link to="/atelier" className="btn-gold" style={{ display: 'inline-flex', marginTop: '30px', alignItems: 'center', gap: '10px' }}>
              Explore Atelier <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '40px' }}>
            {wishlist.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212, 175, 55, 0.1)', padding: '20px' }}
              >
                <div style={{ position: 'relative', paddingBottom: '135%', overflow: 'hidden' }}>
                  <img src={product.image} alt={product.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button 
                    onClick={() => toggleWishlist(product)}
                    style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '50%', color: 'var(--gold)' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h3 className="serif" style={{ fontSize: '1.2rem' }}>{product.name}</h3>
                  <p style={{ color: 'var(--gold)', fontWeight: 'bold', margin: '10px 0' }}>{convertPrice(product.priceNum)}</p>
                  <Link 
                    to="/atelier"
                    className="btn-primary" 
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '0.7rem', padding: '12px' }}
                  >
                    View in Atelier
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
