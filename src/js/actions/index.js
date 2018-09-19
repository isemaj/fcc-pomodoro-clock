import * as types from '../constants/ActionTypes';

export const startSession = () => ({
  type: types.START_SESSION,
});

export const pauseSession = () => ({
  type: types.PAUSE_SESSION,
});

export const reset = () => ({
  type: types.RESET,
});

export const increaseSession = () => ({
  type: types.INCREASE_SESSION,
});

export const decreaseSession = () => ({
  type: types.DECREASE_SESSION,
});

export const increaseBreak = () => ({
  type: types.INCREASE_BREAK,
});

export const decreaseBreak = () => ({
  type: types.DECREASE_BREAK,
});

export const test = arg => ({
  type: types.TEST,
  payload: arg,
});

export const secondtest = arg => ({
  type: types.TEST,
  payload: arg,
});
