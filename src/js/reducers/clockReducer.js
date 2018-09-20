import * as types from '../constants/ActionTypes';

const previousState = {
  sessionLength: 1,
  breakLength: 1,
  timeStatus: 'stop',
  timerType: 'Session',
  currentTime: '25:00',
  minutes: 0,
  timer: 0,
};

const setBreak = (breakLength, type) => {
  if (type === 'decrease') {
    return breakLength > 1 ? breakLength - 1 : breakLength;
  };
  return breakLength < 60 ? breakLength + 1 : breakLength;
};

const setLength = (sessionLength, type) => {
  if (type === 'decrease') {
    return sessionLength > 1 ? sessionLength - 1 : sessionLength;
  }
  return sessionLength < 60 ? sessionLength + 1 : sessionLength;
};

const setCurrenTime = (timer, action, length, type) => {
  if (action === 'INCREASE_SESSION' || action === 'DECREASE_SESSION') {
    let duration  = setLength(length, type);
    return `${duration}:00`;
  }
  if (action === 'INCREASE_BREAK' || action === 'DECREASE_BREAK') {
    let duration = setBreak(length, type);
    return `${duration}:00`;
  }
  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return action !== 'RESET' ? `${minutes}:${seconds}` : '25:00';
}

const setTimerType = (timer, previousType) => {
  if (timer === 0 && previousType === 'Session') {
    return 'Break';
  } 
  if (timer === 0 && previousType === 'Break') {
    return 'Session';
  }
  return previousType;
}

const handleTimer = (timer, sessiontime, breaktime, type) => {
  if (timer === 0 && type === 'Session') {
    return breaktime * 60;
  }
  if (timer === 0 && type === 'Break') {
    return sessiontime * 60;
  }
  return timer - 1; 
}

const clockReducer = (state = previousState, action) => {
  console.log(state.timer);
  switch (action.type) {
    case types.PLAY_PAUSE: 
      return {
        ...state,
        timeStatus: state.timeStatus === 'stop' ? 'playing' : (state.timeStatus === 'playing' ? 'pause' : 'playing'),
        timer: state.timerType === 'Session' ? (state.timeStatus === 'stop' ?state.sessionLength * 60 - 1 : state.timer) : (state.timeStatus === 'stop' ? state.breakLength * 60 - 1 : state.timer),
      };
    case types.TICK:
      return {
        ...state,
        currentTime: setCurrenTime(state.timer), 
        timer: handleTimer(state.timer, state.sessionLength, state.breakLength, state.timerType),
        timerType: setTimerType(state.timer, state.timerType), 
      };
    case types.RESET:
      return {
        ...state,
        sessionLength: 1,
        breakLength: 1,
        timeStatus: 'stop',
        timerType: 'Session',
        currentTime: setCurrenTime(state.timer, action.type),
      };
    case types.INCREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'increase'),
        currentTime: setCurrenTime(null, action.type, state.sessionLength, 'increase'),
      };
    case types.DECREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'decrease'),
        currentTime: setCurrenTime(null, action.type, state.sessionLength, 'decrease'),
      };
    case types.INCREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'increase'),
        currentTime: setCurrenTime(null, action.type, state.breakLength, 'increase'),
      };
    case types.DECREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'decrease'),
        currentTime: setCurrenTime(null, action.type, state.breakLength, 'decrease'),
      };
    default:
      return state;
  }
};

export default clockReducer;
