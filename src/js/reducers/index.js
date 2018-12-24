import { combineReducers } from 'redux';

import clockReducer from './clockReducer';

const rootReducer = combineReducers({
  clockReducer,
});

export default rootReducer;
