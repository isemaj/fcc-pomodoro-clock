import * as types from '../constants/ActionTypes';

export const playPause = () => ({
  type: types.PLAY_PAUSE,
});

export const reset = () => ({
  type: types.RESET,
});

export const tick = () => ({
  type: types.TICK,
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
