import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, MessageCircle, Plus, Minus, Edit3, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, updateNote, isCartOpen, setIsCartOpen, totalPrice, formatPrice, generateWhatsAppMessage } = useCart();
  const [activeNoteId, setActiveNoteId] = useState(null);

  const VIP_THRESHOLD = 200000;
  const progress = Math.min((totalPrice / VIP_THRESHOLD) * 100, 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', zIndex: 4000 }}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ 
              position: 'fixed', top: 0, right: 0, width: '100%', maxWidth: '450px', height: '100%', 
              backgroundColor: 'var(--forest-green)', color: 'white', zIndex: 4001, display: 'flex', flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.3)'
            }}
          >
            {/* Header */}
            <div style={{ padding: '30px', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <ShoppingBag size={24} color="var(--gold)" />
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>Concierge Bag</h2>
              </div>
              <X size={28} onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer', color: 'var(--gold)' }} />
            </div>

            {/* VIP Progress Bar */}
            {cart.length > 0 && (
              <div style={{ padding: '20px 30px', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Gift size={16} color="var(--gold)" />
                      <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>
                        {totalPrice >= VIP_THRESHOLD ? 'VIP GIFT UNLOCKED' : 'ATELIER VIP PROGRESS'}
                      </span>
                   </div>
                   <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{totalPrice >= VIP_THRESHOLD ? 'Ready' : `Spend ${formatPrice(VIP_THRESHOLD - totalPrice)} more`}</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    style={{ height: '100%', backgroundColor: 'var(--gold)' }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.5 }}>
                  <ShoppingBag size={60} style={{ marginBottom: '20px', strokeWidth: 1 }} />
                  <p className="serif" style={{ fontSize: '1.2rem' }}>Your bag is currently empty.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {cart.map((item) => (
                    <div key={item.cartId} style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.05)', paddingBottom: '20px' }}>
                      <div style={{ display: 'flex', gap: '15px' }}>
                        <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', border: '1px solid rgba(212, 175, 55, 0.2)' }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 className="serif" style={{ fontSize: '1.1rem' }}>{item.name}</h3>
                            <button onClick={() => removeFromCart(item.cartId)} style={{ background: 'none', border: 'none', color: 'rgba(255,0,0,0.4)', cursor: 'pointer' }}>
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p style={{ fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '5px' }}>SIZE {item.selectedSize}</p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '4px' }}>
                              <button onClick={() => updateQuantity(item.cartId, -1)} style={{ padding: '5px 10px', background: 'none', border: 'none', color: 'white' }}><Minus size={12}/></button>
                              <span style={{ padding: '0 10px', fontSize: '0.9rem' }}>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.cartId, 1)} style={{ padding: '5px 10px', background: 'none', border: 'none', color: 'white' }}><Plus size={12}/></button>
                            </div>
                            <span style={{ fontWeight: 'bold' }}>{formatPrice(item.priceNum)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bespoke Note */}
                      <div style={{ marginTop: '15px' }}>
                        {activeNoteId === item.cartId ? (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            <textarea 
                              placeholder="Bespoke requests (e.g., custom length, gift wrap)..."
                              value={item.note || ''}
                              onChange={(e) => updateNote(item.cartId, e.target.value)}
                              style={{ 
                                width: '100%', background: 'rgba(212, 175, 55, 0.05)', border: '1px solid var(--gold)', 
                                padding: '10px', color: 'white', fontSize: '0.8rem', outline: 'none', minHeight: '60px',
                                borderRadius: '4px'
                              }}
                            />
                            <button 
                              onClick={() => setActiveNoteId(null)}
                              style={{ fontSize: '0.7rem', color: 'var(--gold)', background: 'none', border: 'none', marginTop: '5px', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                              Save Bespoke Note
                            </button>
                          </motion.div>
                        ) : (
                          <button 
                            onClick={() => setActiveNoteId(item.cartId)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: 'var(--gold)', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer' }}
                          >
                            <Edit3 size={12} /> {item.note ? 'Edit Bespoke Note' : 'Add Bespoke Note'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Final Action */}
            {cart.length > 0 && (
              <div style={{ padding: '30px', borderTop: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ opacity: 0.7, letterSpacing: '0.1em', fontSize: '0.8rem' }}>ESTIMATED TOTAL</span>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--gold)' }}>{formatPrice(totalPrice)}</span>
                </div>
                <button 
                  onClick={() => window.open(`https://wa.me/234000000000?text=${generateWhatsAppMessage()}`, '_blank')}
                  className="btn-gold" 
                  style={{ width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}
                >
                  <MessageCircle size={20} /> Secure Checkout via WhatsApp
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.7rem', opacity: 0.4, marginTop: '15px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  A personal concierge will confirm your tailoring
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
