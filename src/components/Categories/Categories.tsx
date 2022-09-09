import CategoriesType from '../../@types/Categories.interface';

const Categories: React.FC<CategoriesType> = ({ categories, setCategories }) => {
  const arrayOfCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Acute', 'Closed'];

  return (
    <div className="categories">
      <ul>
        {arrayOfCategories.map((element, i) => (
          <li key={i} onClick={() => setCategories(i)} className={categories === i ? 'active' : ''}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
