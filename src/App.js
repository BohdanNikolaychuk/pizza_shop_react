import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import './scss/app.scss';
import Cart from './Page/Cart/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
