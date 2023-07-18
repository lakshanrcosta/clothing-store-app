import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice
);

export const selectCategoriesMap = createSelector([selectCategories], (categoriesSlice) => {
  return categoriesSlice.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});

export const selectCategoriesIsLoading = createSelector([selectCategories], (categoriesSlice) => {
  return categoriesSlice.isLoading;
});
