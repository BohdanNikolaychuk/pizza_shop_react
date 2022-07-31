import React from 'react';
import style from '../Input/Input.module.scss';
import { PizzaContext } from '../AppRouter/AppRouter';
const Input = () => {
  const { searctValue, setSearctValue } = React.useContext(PizzaContext);
  return (
    <div>
      <input
        onChange={(event) => setSearctValue(event.target.value)}
        className={style.input}
        type="text"
        placeholder="Seatch your pizza"
        value={searctValue}
      />
    </div>
  );
};

export default Input;
