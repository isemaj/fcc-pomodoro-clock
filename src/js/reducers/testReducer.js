import { TEST } from '../constants/ActionTypes';

const previousState = {
  status: '',
};

const testReducer = (state = previousState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;
