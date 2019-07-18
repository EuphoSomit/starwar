import { SELECTED_MEMBER_DETAIL } from '../constants/constant.action';

export const selectedMemberDetail = data => ({
  type: SELECTED_MEMBER_DETAIL,
  data
});
