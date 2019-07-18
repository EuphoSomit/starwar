export const API_DIRECTORY = { DOC_ROOT: '' };

export const urlConstants = {
  BASE_URL: process.env.REACT_APP_ENV_URL
};

export const API_INTERFACE = {
  FIND_MEMBER: '/findMember',
  GET_MEMBER_DETAIL: '/getMemberDetail',
  GET_SPECIALTY_LIST: '/getSpecialtyList',
  GET_MANAGEMENT_REFERRAL_LIST: '/getReferrals',
  EXTEND_REFERRAL: '/extendReferral'
};

export const uriConstants = {
  FIND_MEMBER_API: urlConstants.BASE_URL + API_INTERFACE.FIND_MEMBER,
  GET_MEMBER_DETAIL_API:
    urlConstants.BASE_URL + API_INTERFACE.GET_MEMBER_DETAIL,
  GET_SPECIALTY_LIST_API:
    urlConstants.BASE_URL + API_INTERFACE.GET_SPECIALTY_LIST,
  GET_MANAGEMENT_REFERRAL_LIST_API:
    urlConstants.BASE_URL + API_INTERFACE.GET_MANAGEMENT_REFERRAL_LIST,
  EXTEND_REFERRAL_API: urlConstants.BASE_URL + API_INTERFACE.EXTEND_REFERRAL
};
