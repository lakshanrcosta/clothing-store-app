import { CATEGORIES_ACTION_TYPES } from './category.action-types';

const INITIAL_CATEGORIES_STATE = {
  categoriesArray: []
};

export const categoriesReducer = (state = INITIAL_CATEGORIES_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesArray: payload };
    default:
      return state;
  }
};
