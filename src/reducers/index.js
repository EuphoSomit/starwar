import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import memberDetailReducer from './reducer.memberDetail';
import memberSearchReducer from './reducer.memberSearch';
import selectedMemberReducer from './reducer.selectedMember';
import referralProviderReducer from './reducer.referralProvider';
import referralManagementReducer from './reducer.referralManagement';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  memberSearch: memberSearchReducer,
  memberDetail: memberDetailReducer,
  selectedMember: selectedMemberReducer,
  referralProvider: referralProviderReducer,
  referralManagement: referralManagementReducer
});

export default rootReducer;
