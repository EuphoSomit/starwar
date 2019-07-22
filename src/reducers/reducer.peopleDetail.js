import * as actionType from '../constants/constant.action';

const defaultState = {
  authenticated: false
};

const peopleDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_PEOPLE_DETAIL_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_PEOPLE_DETAIL_SUCCESS:
      return {
        ...state,
        peopleDetails: action.payload
      };

    case actionType.GET_PEOPLE_DETAIL_FAILURE:
      return {
        loading: false
      };

    case actionType.AUTH_CHECK:
      return {
        authenticated: true
      };

    default:
      return state;
  }
};

export default peopleDetailReducer;
