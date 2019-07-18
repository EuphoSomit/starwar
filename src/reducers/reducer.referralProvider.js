import * as actionType from '../constants/constant.action';

const defaultState = {};

const referralProviderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_REFERRAL_PROVIDER_REQUESTED:
      return {
        ...state
      };
    case actionType.GET_REFERRAL_PROVIDER_SUCCESS:
      return {
        ...action.payload
      };

    case actionType.GET_REFERRAL_PROVIDER_FAILURE:
      return {
        loading: false
      };
    case actionType.GET_SPECIALTY_LIST_REQUESTED:
      return {
        ...state
      };
    case actionType.GET_SPECIALTY_LIST_SUCCESS:
      return {
        ...action.payload
      };
    case actionType.GET_SPECIALTY_LIST_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default referralProviderReducer;
