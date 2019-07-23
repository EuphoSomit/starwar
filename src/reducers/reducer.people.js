import * as actionType from '../constants/constant.action';

const defaultState = {
  authenticated: false
};

const peopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_PEOPLE_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        peopleDetails: action.payload
      };

    case actionType.GET_PEOPLE_FAILURE:
      return {
        loading: false
      };

    case actionType.AUTH_CHECK:
      const { payload } = action;
      const result = state.peopleDetails.some(
        people =>
          people.name.toLowerCase() === payload.username.toLowerCase() &&
          people.birth_year === payload.password
      );
      return {
        ...state,
        authenticated: result
      };

    case actionType.SIGN_OUT:
      return {
        authenticated: false
      };

    default:
      return state;
  }
};

export default peopleReducer;
