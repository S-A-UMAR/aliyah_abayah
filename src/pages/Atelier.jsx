import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Info, ShieldCheck, ShoppingBag, SlidersHorizontal, ChevronRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';

import abaya1 from '../assets/abayas/aliyah_signature_abaya_1_1778404588057.png';
import abaya2 from '../assets/abayas/aliyah_occasion_abaya_2_1778404602040.png';
import abaya3 from '../assets/abayas/aliyah_essential_abaya_3_1778404782924.png';
import abaya4 from '../assets/abayas/aliyah_lifestyle_abaya_4_1778404794973.png';
import abaya5 from '../assets/abayas/aliyah_abaya_5_1778405359888.png';
import abaya6 from '../assets/abayas/aliyah_abaya_6_1778405437446.png'; 

const products = [
  { id: 1, name: 'Noor Signature', arabic: 'نور التوقيع', category: 'Signature', priceNum: 85000, fabric: 'Heritage Silk-Crepe', image: abaya1, status: 'Made to Order', desc: 'A masterpiece of fluidity and grace, featuring our signature hand-stitched gold borders.' },
  { id: 2, name: 'Midnight Silk', arabic: 'حرير منتصف الليل', category: 'Occasion', priceNum: 120000, fabric: 'Italian Armani Silk', image: abaya2, status: 'Made to Order', desc: 'Designed for the hours of elegance. A deep midnight hue with a mirror-like silk finish.' },
  { id: 3, name: 'Desert Rose', arabic: 'وردة الصحراء', category: 'Essentials', priceNum: 65000, fabric: 'Breathable Chiffon', image: abaya3, status: 'Ready to Ship', desc: 'Timeless simplicity. A silhouette that moves with the desert wind.' },
  { id: 4, name: 'Lumina Gold', arabic: 'لومينا جولد', category: 'Signature', priceNum: 95000, fabric: 'Gold-Threaded Organza', image: abaya4, status: 'Made to Order', desc: 'Radiance in every stitch. Crafted for grand entrances and celebration.' },
  { id: 5, name: 'Onyx Grace', arabic: 'أونيكس جريس', category: 'Occasion', priceNum: 145000, fabric: 'Double-Layered Georgette', image: abaya5, status: 'Made to Order', desc: 'The weight of prestige. A structured drape for the discerning Aliyah woman.' },
  { id: 6, name: 'Sandstone Everyday', arabic: 'حجر رملي', category: 'Essentials', priceNum: 75000, fabric: 'Premium Nida', image: abaya6, status: 'Ready to Ship', desc: 'Daily refinement. Resistant to the elements, yet soft as a second skin.' },
  { id: 7, name: 'Zahra Wrap', arabic: 'زهرة', category: 'Signature', priceNum: 88000, fabric: 'Embroidered Tulle', image: abaya1, status: 'Made to Order', desc: 'A floral whisper. Delicate hand-embroidery on the cuffs and hem.' },
  { id: 8, name: 'Sultanah Velvet', arabic: 'سلطانة', category: 'Occasion', priceNum: 180000, fabric: 'Royal Plush Velvet', image: abaya2, status: 'Made to Order', desc: 'The pinnacle of the Aliyah atelier. Heavy weight, high prestige.' },
  { id: 9, name: 'Luna Modest', arabic: 'لونا', category: 'Essentials', priceNum: 55000, fabric: 'Matte Crepe', image: abaya3, status: 'Ready to Ship', desc: 'Subtle beauty for quiet moments. Our most breathable silhouette yet.' },
  { id: 10, name: 'Amira Lace', arabic: 'أميرة', category: 'Signature', priceNum: 110000, fabric: 'Corded French Lace', image: abaya4, status: 'Made to Order', desc: 'Romantic detailing meets modest architectural lines.' },
  { id: 11, name: 'Royal Navy', arabic: 'البحرية الملكية', category: 'Occasion', priceNum: 130000, fabric: 'Raw Silk Blend', image: abaya5, status: 'Made to Order', desc: 'Structure meets fluidity. A deep navy that commands respect.' },
  { id: 12, name: 'Olive Grove', arabic: 'بستان الزيتون', category: 'Essentials', priceNum: 68000, fabric: 'Soft Linen Silk', image: abaya6, status: 'Ready to Ship', desc: 'Natural elegance. A versatile piece that transitions from day to night.' }
];

import ArabicWatermark from '../components/ArabicWatermark';

const Atelier = () => {
  const [filter, setFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { convertPrice } = useCurrency();
  
  const categories = ['All', 'Signature', 'Occasion', 'Essentials'];
  const priceRanges = [
    { label: 'All Prices', value: 'All' },
    { label: 'Under ₦80k', value: 'under-80' },
    { label: '₦80k - ₦120k', value: '80-120' },
    { label: 'Over ₦120k', value: 'over-120' }
  ];
  const sizes = ['52', '54', '56', '58', '60'];

  const filteredProducts = products.filter(p => {
    const categoryMatch = filter === 'All' || p.category === filter;
    let priceMatch = true;
    if (priceFilter === 'under-80') priceMatch = p.priceNum < 80000;
    else if (priceFilter === '80-120') priceMatch = p.priceNum >= 80000 && p.priceNum <= 120000;
    else if (priceFilter === 'over-120') priceMatch = p.priceNum > 120000;
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="atelier-page section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <ArabicWatermark top="5%" right="-5%" size="35vw" opacity={0.04} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <header style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '10px' }}>The Atelier</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.6, justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Discover</span>
            <ChevronRight size={14} />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{filter} Pieces</span>
          </div>
        </header>

        {/* Mobile Sub-Header with Filter Button */}
        <div className="mobile-only" style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            onClick={() => setIsFilterDrawerOpen(true)}
            style={{ 
              backgroundColor: 'var(--gold)', color: 'var(--forest-green)', 
              border: 'none', padding: '10px 15px', borderRadius: '5px',
              display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 'bold'
            }}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', scrollbarWidth: 'none', flex: 1 }}>
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                style={{ 
                  whiteSpace: 'nowrap', padding: '8px 15px', borderRadius: '4px',
                  border: `1px solid ${filter === cat ? 'var(--gold)' : 'rgba(212,175,55,0.2)'}`,
                  color: filter === cat ? 'var(--gold)' : 'var(--champagne)',
                  fontSize: '0.75rem', cursor: 'pointer', background: 'transparent'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
          {/* Desktop Discovery Sidebar */}
          <aside className="desktop-only" style={{ flex: '0 0 250px' }}>
            <div style={{ 
              position: 'sticky', 
              top: '120px', 
              maxHeight: 'calc(100vh - 160px)', 
              overflowY: 'auto',
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none' /* IE/Edge */
            }}>
              <style>{`
                aside div::-webkit-scrollbar { display: none; }
              `}</style>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                <SlidersHorizontal size={18} color="var(--gold)" />
                <span style={{ fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '500' }}>Filter By</span>
              </div>

              <div style={{ marginBottom: '50px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px', color: 'rgba(255,255,255,0.4)' }}>Collection</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {categories.map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => setFilter(cat)}
                      style={{ 
                        background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                        color: filter === cat ? 'var(--gold)' : 'var(--champagne)',
                        fontSize: '1rem', transition: 'all 0.3s ease'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '50px' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px', color: 'rgba(255,255,255,0.4)' }}>Price Range</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {priceRanges.map((range) => (
                    <button 
                      key={range.value} 
                      onClick={() => setPriceFilter(range.value)}
                      style={{ 
                        background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                        color: priceFilter === range.value ? 'var(--gold)' : 'var(--champagne)',
                        fontSize: '1rem', transition: 'all 0.3s ease'
                      }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div style={{ flex: 1 }}>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layoutId={`product-${product.id}`}
                  className="abaya-card"
                  style={{ position: 'relative' }}
                >
                  <div 
                    onClick={() => { setSelectedProduct(product); setSelectedSize(null); }}
                    style={{ position: 'relative', paddingBottom: '135%', overflow: 'hidden', backgroundColor: '#15211b', cursor: 'pointer' }}
                  >
                    <div className="silk-flow-overlay"></div>
                    <motion.img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      className="silk-image"
                    />
                    
                    {/* Status Badge */}
                    <div style={{ 
                      position: 'absolute', top: '15px', left: '15px', 
                      padding: '6px 12px', backgroundColor: 'rgba(27, 43, 36, 0.8)', 
                      backdropFilter: 'blur(10px)', border: '1px solid var(--gold)',
                      fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'var(--gold)', zIndex: 2
                    }}>
                      {product.status}
                    </div>

                    {/* Wishlist Button */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                      style={{ 
                        position: 'absolute', top: '15px', right: '15px', zIndex: 10,
                        backgroundColor: 'rgba(27, 43, 36, 0.6)', backdropFilter: 'blur(10px)',
                        padding: '10px', borderRadius: '50%', color: 'var(--gold)',
                        border: `1px solid ${isInWishlist(product.id) ? 'var(--gold)' : 'rgba(212,175,55,0.2)'}`
                      }}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? 'var(--gold)' : 'none'} />
                    </button>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)' }}>{product.category}</span>
                      <span style={{ fontWeight: '600', fontSize: '1rem' }}>{convertPrice(product.priceNum)}</span>
                    </div>
                    <h3 className="serif" style={{ fontSize: '1.3rem', marginTop: '8px' }}>{product.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterDrawerOpen && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 6000 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterDrawerOpen(false)}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15, 25, 20, 0.8)', backdropFilter: 'blur(10px)' }}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              style={{ 
                position: 'absolute', top: 0, left: 0, width: '85%', maxWidth: '350px', height: '100%', 
                backgroundColor: 'var(--forest-green)', padding: '40px', display: 'flex', flexDirection: 'column',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h2 className="serif" style={{ fontSize: '1.8rem' }}>Discovery</h2>
                <X size={28} onClick={() => setIsFilterDrawerOpen(false)} style={{ color: 'var(--gold)', cursor: 'pointer' }} />
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '20px' }}>Collection</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {categories.map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => { setFilter(cat); setIsFilterDrawerOpen(false); }}
                      style={{ 
                        background: 'none', border: 'none', textAlign: 'left',
                        color: filter === cat ? 'var(--gold)' : 'white', fontSize: '1.1rem'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '20px' }}>Price Range</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {priceRanges.map((range) => (
                    <button 
                      key={range.value} 
                      onClick={() => { setPriceFilter(range.value); setIsFilterDrawerOpen(false); }}
                      style={{ 
                        background: 'none', border: 'none', textAlign: 'left',
                        color: priceFilter === range.value ? 'var(--gold)' : 'white', fontSize: '1.1rem'
                      }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setIsFilterDrawerOpen(false)}
                className="btn-gold" 
                style={{ marginTop: 'auto', width: '100%', padding: '15px' }}
              >
                Show {filteredProducts.length} Results
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Digital Private View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 6000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15, 25, 20, 0.95)', backdropFilter: 'blur(15px)' }}
            />
            
            <motion.div 
              layoutId={`product-${selectedProduct.id}`}
              className="modal-container"
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '1000px', 
                backgroundColor: 'var(--forest-green)', 
                border: '1px solid rgba(212, 175, 55, 0.3)',
                maxHeight: '90vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                zIndex: 6001
              }}
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '5px', border: 'none', cursor: 'pointer', color: 'var(--gold)' }}
              >
                <X size={28} />
              </button>

              <div className="modal-content-grid">
                {/* Modal Image Side */}
                <div className="modal-image-wrapper">
                  <div className="silk-flow-overlay"></div>
                  <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="silk-image" />
                </div>

                {/* Modal Details Side */}
                <div className="modal-details-wrapper" style={{ padding: 'clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '100%' }}>
                  <div style={{ marginBottom: '30px' }}>
                    <span style={{ color: 'var(--gold)', letterSpacing: '0.4em', textTransform: 'uppercase', fontSize: '0.7rem' }}>{selectedProduct.category} Collection</span>
                    <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '10px', lineHeight: '1.1' }}>{selectedProduct.name}</h2>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--gold)', marginTop: '5px' }}>{selectedProduct.arabic}</h3>
                    <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--gold)', margin: '20px 0' }}></div>
                    <p style={{ fontSize: '1rem', opacity: 0.8, lineHeight: '1.6' }}>{selectedProduct.desc}</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                    <div>
                      <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '5px' }}>Fabric Heritage</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--champagne)' }}>{selectedProduct.fabric}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.5, marginBottom: '5px' }}>Atelier Price</div>
                      <div style={{ fontSize: '1.1rem', color: 'var(--gold)', fontWeight: '600' }}>{convertPrice(selectedProduct.priceNum)}</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                      <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.8 }}>Select Your Fit (Length)</span>
                      <Link to="/care" style={{ fontSize: '0.6rem', color: 'var(--gold)', textDecoration: 'underline' }}>Size Guide</Link>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          style={{
                            width: '42px',
                            height: '42px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1px solid ${selectedSize === size ? 'var(--gold)' : 'rgba(212, 175, 55, 0.2)'}`,
                            backgroundColor: selectedSize === size ? 'var(--gold)' : 'transparent',
                            color: selectedSize === size ? 'var(--forest-green)' : 'var(--gold)',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <button 
                      disabled={!selectedSize}
                      onClick={() => {
                        addToCart(selectedProduct, selectedSize);
                        setSelectedProduct(null);
                      }}
                      className="btn-gold" 
                      style={{ 
                        width: '100%', 
                        padding: '18px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '12px',
                        opacity: selectedSize ? 1 : 0.4,
                        cursor: selectedSize ? 'pointer' : 'not-allowed'
                      }}
                    >
                      <ShoppingBag size={18} /> {selectedSize ? `Add to Bag (Size ${selectedSize})` : 'Select a Size'}
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.65rem', opacity: 0.4, marginTop: '12px', letterSpacing: '0.1em' }}>
                      <ShieldCheck size={12} style={{ display: 'inline', marginRight: '5px' }} /> HANDMADE IN OUR ABUJA ATELIER
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .product-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
          gap: 40px 20px;
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .modal-image-wrapper {
          height: 100%;
          min-height: 400px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px 15px;
          }
          .modal-content-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-wrapper {
            height: 400px;
          }
          .abaya-card h3 {
            font-size: 1.1rem !important;
          }
        }

        .silk-flow-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(212, 175, 55, 0.05) 50%,
            transparent 60%
          );
          background-size: 200% 200%;
          z-index: 1;
          pointer-events: none;
          animation: silkShimmer 8s infinite linear;
        }

        .silk-image {
          animation: silkBreath 10s infinite ease-in-out;
        }

        @keyframes silkShimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }

        @keyframes silkBreath {
          0%, 100% { transform: scale(1); filter: contrast(1); }
          50% { transform: scale(1.02); filter: contrast(1.05); }
        }
      `}</style>
    </div>
  );
};

export default Atelier;
