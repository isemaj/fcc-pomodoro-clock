import * as types from '../constants/ActionTypes';

export const test = arg => ({
  type: types.TEST,
  payload: arg,
});

export const secondtest = arg => ({
  type: types.TEST,
  payload: arg,
});
