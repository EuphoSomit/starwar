import * as actionType from '../constants/constant.action';

const defaultState = {
  referralList: [],
  searchText: null,
  searchReferralList: []
};

const referralManagementReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_REFERRAL_MANAGEMENT_REQUESTED:
      return {
        ...state
      };

    case actionType.GET_REFERRAL_MANAGEMENT_SUCCESS:
      return {
        ...state,
        referralList: action.payload.referralList
        /* referralList: [
          {
            referralUuid: 'ff73011b-7cac-4ccf-a57a-c7551c5e2239',
            referralId: 'ff73011b-7cac-4ccf-a57a-c7551c5e2239',
            status: 'Complete',
            specialty: 'Family Practice',
            startDate: '05/08/19',
            endDate: '09/05/19',
            visits: null,
            referringProvider: 'Brian Burkhart, MD0',
            referredProviders: ['Jason Pirigyi, DC1', 'Jason Pirigyi, DC2'],
            memberId: 'ACME1237823',
            memberName: 'Hope B. Fitch-Mickiewicz',
            referredProviderList: [
              {
                'npi': '1518239532',
                'providerName': 'Jason Pirigyi, DC'
              },
              {
                'npi': '1518239533',
                'providerName': 'Jason Pirigyi, DC'
              }
            ],
            referralReason:
              'Evaluate for severe R Knee pain. Patient completed 20 sessions of PT in 2018.'
          },
          {
            referralUuid: '0fb12b57-3e17-4106-a16c-abab8132bcb6',
            referralId: '0fb12b57-3e17-4106-a16c-abab8132bcb6',
            status: 'Expired',
            specialty: 'Family Practice',
            startDate: '05/08/19',
            endDate: '09/05/19',
            visits: null,
            referringProvider: 'Brian Burkhart, MD0',
            referredProviders: ['Jason Pirigyi, DC3', 'Jason Pirigyi, DC4'],
            memberId: 'ACME1237823',
            memberName: 'Hope B. Fitch-Mickiewicz',
            referredProviderList: [
              {
                'npi': '1518239534',
                'providerName': 'Jason Pirigyi, DC'
              },
              {
                'npi': '1518239535',
                'providerName': 'Jason Pirigyi, DC'
              }
            ],
            referralReason:
              'Evaluate for severe R Knee pain. Patient completed 20 sessions of PT in 2018.'
          }
        ]*/
      };

    case actionType.GET_REFERRAL_MANAGEMENT_FAILURE:
      return {
        loading: false
      };

    case actionType.GET_REFERRAL_MANAGEMENT_SEARCH:
      const { payload } = action;
      const searchReferralList = state.referralList.filter(
        val =>
          (val.referralUuid !== null &&
            val.referralUuid
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          (val.referralId !== null &&
            val.referralId
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          val.startDate
            .toLowerCase()
            .indexOf(payload.memberName.toLowerCase()) !== -1 ||
          val.endDate
            .toLowerCase()
            .indexOf(payload.memberName.toLowerCase()) !== -1 ||
          val.status.toLowerCase().indexOf(payload.memberName.toLowerCase()) !==
            -1 ||
          (val.specialty !== null &&
            val.specialty
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          (val.memberId !== null &&
            val.memberId
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          (val.memberName !== null &&
            val.memberName
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          (val.referringProvider !== null &&
            val.referringProvider
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1) ||
          val.referredProviders
            .toString()
            .toLowerCase()
            .indexOf(payload.memberName.toLowerCase()) !== -1 ||
          (val.referralReason !== null &&
            val.referralReason
              .toLowerCase()
              .indexOf(payload.memberName.toLowerCase()) !== -1)
      );
      return { ...state, searchText: payload, searchReferralList };

    case actionType.EMPTY_REFERRAL_SEARCH:
      return {
        ...state,
        searchText: null,
        searchReferralList: []
      };

    case actionType.EXTEND_REFERRAL_SUCCESS:
      return {
        ...state
      };

    case actionType.EXTEND_REFERRAL_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default referralManagementReducer;
