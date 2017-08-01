import { handleActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { defaultCategories } from '../constants/categories';
import { insert, insertAll, update, remove } from '../utils/stateHelper';

const createCategory = ({ name, icon, type }) => ({ name, icon, type });

const initialState = insertAll({}, defaultCategories);

const categoriesReducer = handleActions({
  [actionTypes.CREATE_CATEGORY]: (state, { payload }) => insert(state, createCategory(payload)),
  [actionTypes.UPDATE_CATEGORY]: (state, { payload }) => update(state, payload.id, payload),
  [actionTypes.DELETE_CATEGORY]: (state, { payload }) => remove(state, payload),
}, initialState);

export default categoriesReducer;
