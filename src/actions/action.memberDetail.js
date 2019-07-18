import { GET_MEMBER_DETAIL_REQUESTED } from '../constants/constant.action';

export function getMemberDetail(memberUuidObj) {
  return {
    type: GET_MEMBER_DETAIL_REQUESTED,
    payload: memberUuidObj
  };
}
