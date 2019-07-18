import * as actionType from '../constants/constant.action';

const defaultState = {};

const selectedMemberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SELECTED_MEMBER_DETAIL:
      return {
        ...action.data
      };

    default:
      return state;
  }
};

export default selectedMemberReducer;
