import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import { PizzaContext } from '../../components/AppRouter/AppRouter';
import { setCategoriesID } from '../../store/slices/filterSlice';

import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.filterSlice.categories);
  const sort = useSelector((state) => state.filterSlice.sort);

  const { searctValue } = React.useContext(PizzaContext);
  let [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  let skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  let pizza = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://62e27f5fe8ad6b66d85cd42a.mockapi.io/pizzas?${
        categories > 0 ? `category=${categories}` : ''
      }&sortBy=${sort.sorting}&order=desc&search=${searctValue}`,
    )
      .then((result) => {
        return result.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setLoading(false);
      });
  }, [categories, sort, searctValue]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
              categories={categories}
              setCategories={(id) => dispatch(setCategoriesID(id))}
            />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">{loading ? skeleton : pizza}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
