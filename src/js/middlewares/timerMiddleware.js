let intervalId = null;
const timerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'PLAY_PAUSE') {
    if (getState().clockReducer.timeStatus === 'stop' || getState().clockReducer.timeStatus === 'pause') {
      intervalId = setInterval(() => dispatch({
        type: 'TICK',
      }), 1000);
    }
    if (getState().clockReducer.timeStatus === 'playing') {
      clearInterval(intervalId);
    }
  }
  if (action.type === 'RESET') {
    clearInterval(intervalId);
  }
  next(action);
};

export default timerMiddleware;
