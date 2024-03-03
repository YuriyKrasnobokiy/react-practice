import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from '../../redux/products/products.reducer';

const Filter = () => {
  const filterTerm = useSelector(state => state.productsStore.filterTerm);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(setFilterTerm(evt.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter product or price"
        value={filterTerm}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
