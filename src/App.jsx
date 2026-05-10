import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Atelier from './pages/Atelier';
import Events from './pages/Events';
import Social from './pages/Social';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/events" element={<Events />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </Layout>
  );
}

export default App;
