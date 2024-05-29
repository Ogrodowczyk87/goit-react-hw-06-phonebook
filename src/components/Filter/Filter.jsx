import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { findContact } from 'store/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterSelector = state => state.filter.searchQuery;
  const filter = useSelector(filterSelector);

  const handleFilterChange = e => {
    dispatch(findContact(e.target.value));
  };
  return (
    <>
      <div className={css.searchField}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          className={css.filterInput}
        />
      </div>
    </>
  );
};
