import { baseService } from '../services/service';
import { uriConstants } from '../constants/constant.uri';

export function getMemberDetails(data) {
  let url = uriConstants.GET_MEMBER_DETAIL_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}

export function findMember(data) {
  let url = uriConstants.FIND_MEMBER_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}

export function getSpecialtyList(data) {
  let url = uriConstants.GET_SPECIALTY_LIST_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}

export function getManagementReferralList(data) {
  let url = uriConstants.GET_MANAGEMENT_REFERRAL_LIST_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}

export function extendReferral(data) {
  let url = uriConstants.EXTEND_REFERRAL_API;
  const dataJson = JSON.stringify(data);
  return baseService.post(url, dataJson);
}
