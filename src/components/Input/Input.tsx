import style from '../Input/Input.module.scss';

//redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/slices/filterSlice';
import { useSelector } from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state: any) => state.filterSlice);
  return (
    <div>
      <input
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        className={style.input}
        type="text"
        placeholder="Seartch your pizza"
        value={searchValue}
      />
    </div>
  );
};

export default Input;
