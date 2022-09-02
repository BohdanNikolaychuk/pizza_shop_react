import React from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';
import {PizzaContext} from '../../components/AppRouter/AppRouter';
import {setCategoriesID} from '../../store/slices/filterSlice';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPizzaItems} from "../../store/slices/pizzaSlice";

function Home() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.filterSlice.categories);
    const sort = useSelector((state) => state.filterSlice.sort);
    const {items} = useSelector((state) => state.pizzaSlice);

    const {searctValue} = React.useContext(PizzaContext);
    let [pizzas, setPizzas] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    let skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i}/>);
    let pizza = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

    React.useEffect(() => {
        setLoading(true);
        dispatch(fetchPizzaItems({categories, sort, searctValue}))
    }, [categories, sort, searctValue]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories
                            categories={categories}
                            setCategories={(id) => dispatch(setCategoriesID(id))}
                        />
                        <Sort/>
                    </div>
                    <h2 className="content__title">All pizzas</h2>
                    <div className="content__items">{loading ? skeleton : pizza}</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
