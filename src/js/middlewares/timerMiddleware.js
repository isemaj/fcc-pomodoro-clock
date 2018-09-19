const timerMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().clockReducer.breakLength);
   if (action.type === 'START_SESSION') {
    acion.interval = setInterval(() => {
      console.log('test');
    }, 1000);
  } else if (action.type === 'PAUSE_SESSION') {
    clearInterval(action.interval);
  }
  // next() passes an action to the next middleware, or to the reducer if
  // there's no next middleware
  next(action);
};

export default timerMiddleware;
