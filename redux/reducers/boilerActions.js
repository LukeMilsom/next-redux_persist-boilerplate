import * as t from '../types';
import { getLocalStore } from 'next-persist';

const initialState = {
  _state: 'Static 😞',
};

const persistedState = getLocalStore('boilerActions', initialState);

export default (state = persistedState, action) => {
  switch (action.type) {
    case t.SET_BOILERPLATE_ACTION:
      return {
        ...state,
        _state: action.payload,
      };
    default:
      return state;
  }
};
