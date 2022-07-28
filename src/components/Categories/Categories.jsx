import React from 'react';

const Categories = () => {
  const arrayOfCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Acute', 'Closed'];
  const [categories, setCategories] = React.useState(0);

  return (
    <div className="categories">
      <ul>
        {arrayOfCategories.map((element, i) => (
          <li onClick={() => setCategories(i)} className={categories === i ? 'active' : ''}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
