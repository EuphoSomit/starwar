import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import peopleReducer from './reducer.people';
import planetsReducer from './reducer.planets';

const rootReducer = combineReducers({
  authentication: false,
  form: reduxFormReducer,
  people: peopleReducer,
  planets: planetsReducer
});

export default rootReducer;
