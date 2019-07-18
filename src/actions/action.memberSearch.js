import {
  GET_MEMBER_SEARCH_REQUESTED,
  MEMBER_SEARCH_EMPTY
} from '../constants/constant.action';

export function getMemberSearch(memberIdObj) {
  return {
    type: GET_MEMBER_SEARCH_REQUESTED,
    payload: memberIdObj
  };
}

export function memberSearchEmpty() {
  return {
    type: MEMBER_SEARCH_EMPTY
  };
}
