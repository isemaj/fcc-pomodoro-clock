import * as types from '../constants/ActionTypes';

const previousState = {
  sessionLength: 25,
  breakLength: 5,
  timeStatus: 'stop',
  timerType: 'Session',
  currentTime: '25:00',
  minutes: 0,
  timer: 0,
  audioSource: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
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

const setCurrenTime = (timer, action, length, type, timerType, prevCurrentTime) => {
  if (action === 'INCREASE_SESSION' || action === 'DECREASE_SESSION') {
    if (timerType === 'Session') {
      const duration = setLength(length, type);
      return duration < 10 ? `0${duration}:00` : `${duration}:00`;
    }
    return prevCurrentTime;
  }
  if (action === 'INCREASE_BREAK' || action === 'DECREASE_BREAK') {
    if (timerType === 'Break') {
      const duration = setBreak(length, type);
      return duration < 10 ? `0${duration}:00` : `${duration}:00`;
    }
    return prevCurrentTime;
  }
  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return action !== 'RESET' ? `${minutes}:${seconds}` : '25:00';
};

const setTimerType = (timer, previousType) => {
  if (timer === 0 && previousType === 'Session') {
    return 'Break';
  }
  if (timer === 0 && previousType === 'Break') {
    return 'Session';
  }
  return previousType;
};

const handleTimer = (timer, sessiontime, breaktime, type, action) => {
  if (action === 'INCREASE_SESSION') {
    if (type === 'Session') {
      // return ( sessiontime + 1 ) * 60 - 1;
      return sessiontime === 60 ? sessiontime * (60 - 1) : (sessiontime + 1) * 60 - 1;
    }
    return timer;
  }
  if (action === 'DECREASE_SESSION') {
    if (type === 'Session') {
      return sessiontime === 1 ? sessiontime * (60 - 1) : (sessiontime - 1) * 60 - 1;
    }
    return timer;
  }
  if (action === 'INCREASE_BREAK') {
    if (type === 'Break') {
      return breaktime === 60 ? (breaktime) * 60 - 1 : (breaktime + 1) * 60 - 1;
    }
    return timer;
  }
  if (action === 'DECREASE_BREAK') {
    if (type === 'Break') {
      return breaktime === 1 ? (breaktime) * 60 - 1 : (breaktime - 1) * 60 - 1;
    }
    return timer;
  }
  if (timer === 0 && type === 'Session') {
    return breaktime * 60;
  }
  if (timer === 0 && type === 'Break') {
    return sessiontime * 60;
  }
  return timer - 1;
};

const clockReducer = (state = previousState, action) => {
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
        sessionLength: 25,
        breakLength: 5,
        timeStatus: 'stop',
        timerType: 'Session',
        currentTime: setCurrenTime(state.timer, action.type),
      };
    case types.INCREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'increase'),
        currentTime: setCurrenTime(null, action.type, state.sessionLength, 'increase', state.timerType, state.currentTime),
        timer: handleTimer(state.timer, state.sessionLength, state.breakLength, state.timerType, action.type),
      };
    case types.DECREASE_SESSION:
      return {
        ...state,
        sessionLength: setLength(state.sessionLength, 'decrease'),
        currentTime: setCurrenTime(null, action.type, state.sessionLength, 'decrease', state.timerType, state.currentTime),
        timer: handleTimer(state.timer, state.sessionLength, state.breakLength, state.timerType, action.type),
      };
    case types.INCREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'increase'),
        currentTime: setCurrenTime(null, action.type, state.breakLength, 'increase', state.timerType, state.currentTime),
        timer: handleTimer(state.timer, state.sessionLength, state.breakLength, state.timerType, action.type),
      };
    case types.DECREASE_BREAK:
      return {
        ...state,
        breakLength: setBreak(state.breakLength, 'decrease'),
        currentTime: setCurrenTime(null, action.type, state.breakLength, 'decrease', state.timerType, state.currentTime),
        timer: handleTimer(state.timer, state.sessionLength, state.breakLength, state.timerType, action.type),
      };
    default:
      return state;
  }
};

export default clockReducer;
