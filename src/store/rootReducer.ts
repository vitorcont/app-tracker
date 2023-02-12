import { combineReducers } from 'redux';

import blynkReducer from './Blynk/reducer';

const reducers = combineReducers({
  blynk: blynkReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
