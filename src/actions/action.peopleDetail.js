import { GET_PEOPLE_DETAIL_REQUESTED } from '../constants/constant.action';

export function getPeopleDetail() {
  return {
    type: GET_PEOPLE_DETAIL_REQUESTED
  };
}
