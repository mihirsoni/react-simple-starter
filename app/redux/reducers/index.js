import { combineReducers } from 'redux';
import todos from './todo';
import { routerReducer as router } from 'react-router-redux';
const rootReducer = combineReducers({
  todos,
  router
});
export default rootReducer;
