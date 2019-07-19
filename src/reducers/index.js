import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import peopleDetailReducer from './reducer.peopleDetail';
import planetsReducer from './reducer.planets';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  peopleDetail: peopleDetailReducer,
  planets: planetsReducer
});

export default rootReducer;
