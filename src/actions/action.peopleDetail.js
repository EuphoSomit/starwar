import {
  GET_PEOPLE_DETAIL_REQUESTED,
  AUTH_CHECK
} from '../constants/constant.action';

export function getPeopleDetail() {
  return {
    type: GET_PEOPLE_DETAIL_REQUESTED
  };
}

export function checkAuth(value) {
  return {
    type: AUTH_CHECK,
    payload: value
  };
}
