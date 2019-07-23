import {
  GET_PEOPLE_REQUESTED,
  AUTH_CHECK,
  SIGN_OUT
} from '../constants/constant.action';

export function getPeople() {
  return {
    type: GET_PEOPLE_REQUESTED
  };
}

export function checkAuth(value) {
  return {
    type: AUTH_CHECK,
    payload: value
  };
}

export function signOut() {
  return {
    type: SIGN_OUT
  };
}
