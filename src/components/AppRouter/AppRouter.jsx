import React from 'react';
import Cart from '../../page/Cart/Cart';
import Home from '../../page/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
export const PizzaContext = React.createContext();
const AppRouter = () => {
  const [searctValue, setSearctValue] = React.useState('');

  return (
    <PizzaContext.Provider value={{ searctValue, setSearctValue }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PizzaContext.Provider>
  );
};

export default AppRouter;
