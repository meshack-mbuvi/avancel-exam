import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialState = {
  issues: { completed: 100, correct: 75 },
};

const Issues = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Issues,
});

export default rootReducer;
