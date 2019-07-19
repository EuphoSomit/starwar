import * as actionType from '../constants/constant.action';

const defaultState = {};

const peopleDetailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_PEOPLE_DETAIL_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_PEOPLE_DETAIL_SUCCESS:
      return {
        ...action.payload
      };

    case actionType.GET_PEOPLE_DETAIL_FAILURE:
      return {
        loading: false
      };
    default:
      return state;
  }
};

export default peopleDetailReducer;
