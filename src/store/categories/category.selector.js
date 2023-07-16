import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => {
  return categoriesSlice.categoriesArray;
});

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    console.log(category);
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
