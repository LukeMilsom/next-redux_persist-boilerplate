import { combineReducers } from 'redux';
import boilerActions from './boilerActions';

const rootReducer = combineReducers({
  boilerActions: boilerActions,
});

export default rootReducer;
