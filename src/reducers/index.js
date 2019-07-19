import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import peopleDetailReducer from './reducer.peopleDetail';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  peopleDetail: peopleDetailReducer
});

export default rootReducer;
