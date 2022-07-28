import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import './scss/app.scss';
import Cart from './Page/Cart';

function App() {
  //https://62e27f5fe8ad6b66d85cd42a.mockapi.io/pizzas

  let [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://62e27f5fe8ad6b66d85cd42a.mockapi.io/pizzas')
      .then((result) => {
        return result.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setLoading(false);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <div className="content__top">
                  <Categories />
                  <Sort />
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                  {loading
                    ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                    : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
                </div>
              </div>
            </div>
          </div>
        }
      />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
