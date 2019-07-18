import * as actionType from '../constants/constant.action';

const defaultState = {};

const memberDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_MEMBER_DETAIL_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_MEMBER_DETAIL_SUCCESS:
      return {
        ...action.payload
      };

    case actionType.GET_MEMBER_DETAIL_FAILURE:
      return {
        loading: false
      };

    case actionType.SORT_BY_MEMBER_DETAIL: {
      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
};

export default memberDetailReducer;
