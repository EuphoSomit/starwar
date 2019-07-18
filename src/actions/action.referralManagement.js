import {
  GET_REFERRAL_MANAGEMENT_REQUESTED,
  GET_REFERRAL_MANAGEMENT_SEARCH,
  EMPTY_REFERRAL_SEARCH,
  EXTEND_REFERRAL
} from '../constants/constant.action';

export function getReferralManagementList(carePointObj) {
  return {
    type: GET_REFERRAL_MANAGEMENT_REQUESTED,
    payload: carePointObj
  };
}

export function getReferralManagementSearch(value) {
  return {
    type: GET_REFERRAL_MANAGEMENT_SEARCH,
    payload: value
  };
}

export function emptyReferralSearch() {
  return {
    type: EMPTY_REFERRAL_SEARCH
  };
}

export function extendReferral(referralUuid) {
  return {
    type: EXTEND_REFERRAL,
    payload: referralUuid
  };
}
