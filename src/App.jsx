import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Atelier from './pages/Atelier';
import Events from './pages/Events';
import Social from './pages/Social';
import Heritage from './pages/Heritage';
import Booking from './pages/Booking';
import ClientCare from './pages/ClientCare';
import Lookbook from './pages/Lookbook';
import Wishlist from './pages/Wishlist';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/events" element={<Events />} />
        <Route path="/social" element={<Social />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/care" element={<ClientCare />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Layout>
  );
}

export default App;
