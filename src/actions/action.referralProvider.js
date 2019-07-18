import { GET_SPECIALTY_LIST_REQUESTED } from '../constants/constant.action';

export function getSpecialtyList() {
  return {
    type: GET_SPECIALTY_LIST_REQUESTED,
    payload: {}
  };
}
