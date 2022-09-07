
import Cart from '../../Page/Cart/Cart';
import Home from '../../Page/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
