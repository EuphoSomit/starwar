import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_REFERRAL_MANAGEMENT_REQUESTED,
  GET_REFERRAL_MANAGEMENT_SUCCESS,
  GET_REFERRAL_MANAGEMENT_FAILURE,
  EXTEND_REFERRAL,
  EXTEND_REFERRAL_SUCCESS,
  EXTEND_REFERRAL_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getReferralManagementSaga(action) {
  try {
    const result = yield call(api.getManagementReferralList, action.payload);
    yield put({
      type: GET_REFERRAL_MANAGEMENT_SUCCESS,
      payload: result.data.resultObject
    });
  } catch (error) {
    yield put({ type: GET_REFERRAL_MANAGEMENT_FAILURE, error });
  }
}

function* extendReferralManagementSaga(action) {
  try {
    const result = yield call(api.extendReferral, action.payload);
    yield put({
      type: EXTEND_REFERRAL_SUCCESS,
      payload: result.data.resultObject
    });
  } catch (error) {
    yield put({ type: EXTEND_REFERRAL_FAILURE, error });
  }
}

export function* referralManagementWatcherSaga() {
  yield takeLatest(
    GET_REFERRAL_MANAGEMENT_REQUESTED,
    getReferralManagementSaga
  );
}

export function* extendReferralWatcherSaga() {
  yield takeLatest(EXTEND_REFERRAL, extendReferralManagementSaga);
}
