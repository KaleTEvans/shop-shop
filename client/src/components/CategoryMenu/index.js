import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
//import { useStoreContext } from "../../utils/GlobalState";
//import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import { useSelector, useDispatch } from 'react-redux';
import { updatedCategories, updatedCurrentCategory } from '../../utils/categoriesSlice';

function CategoryMenu() {
  const { categories } = useSelector(state => state.categories);
  
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryData) {
      dispatch(updatedCategories(categoryData.categories));
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch(updatedCategories(categories));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = id => {
    dispatch(updatedCurrentCategory(id));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
