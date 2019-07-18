import * as actionType from '../constants/constant.action';

const defaultState = {};

const memberSearchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_MEMBER_SEARCH_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_MEMBER_SEARCH_SUCCESS:
      return {
        ...action.payload.data
      };

    case actionType.GET_MEMBER_SEARCH_FAILURE:
      return {
        loading: false
      };

    case actionType.MEMBER_SEARCH_EMPTY:
      return {};

    default:
      return state;
  }
};

export default memberSearchReducer;
