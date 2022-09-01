import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

//redux
import { setCategoriesID } from '../../store/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzaItems } from '../../store/slices/pizzaSlice';

function Home() {
  const dispatch = useDispatch();
  const { categories, sort, searchValue } = useSelector((state) => state.filterSlice);
  const { items, status } = useSelector((state) => state.pizzaSlice);

  const getAllPizzas = async () => {
    dispatch(fetchPizzaItems({ categories, sort, searchValue }));
  };

  React.useEffect(() => {
    getAllPizzas();
    // eslint-disable-next-line
  }, [categories, searchValue, sort, searchValue]);

  let skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  let pizza = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

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
          <div className="content__items">{status === 'loading' ? skeleton : pizza}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
