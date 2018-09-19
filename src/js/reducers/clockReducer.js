import * as types from '../constants/ActionTypes';

const previousState = {
  sessionLength: 25,
  breakLength: 5,
  timeStatus: 'stop',
  timerType: 'Session',
  currentTime: 0,
};

let interval = null;

const test2 = () => {
  clearInterval(interval);
};

const test = () => {
  interval = setInterval(() => {
    console.log('1');
  }, 1000);
  console.log('end');
};

const setBreak = (breakLength, type) => {
  if (type === 'decrease') {
    return breakLength > 1 ? breakLength - 1 : breakLength;
  } 
  return breakLength < 60 ? breakLength + 1 : breakLength;
};

const setLength = (sessionLength, type) => {
  if (type === 'decrease') {
    return sessionLength > 1 ? sessionLength - 1 : sessionLength;
  }
  return sessionLength < 60 ? sessionLength + 1 : sessionLength;
};

const clockReducer = (state = previousState, action) => {
  switch (action.type) {
    // case types.START_SESSION:
    //   return {
    //     ...state,
    //     status: action.payload,
    //     currentTime: test(),
    //   };
    // case types.PAUSE_SESSION:
    //   return {
    //     ...state,
    //     status: action.payload,
    //     currentTime: test2(),
    //   };
    case types.RESET:
      return {
        ...state,
        sessionLength: 25,
        breakLength: 5,
        timeStatus: 'stop',
      };
    case types.INCREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'increase'),
      };
    case types.DECREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'decrease'),
      };
    case types.INCREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'increase'),
      };
    case types.DECREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'decrease'),
      };
    default:
      return state;
  }
};

export default clockReducer;
