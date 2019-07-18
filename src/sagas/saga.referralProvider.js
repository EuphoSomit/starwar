import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_REFERRAL_PROVIDER_REQUESTED,
  GET_REFERRAL_PROVIDER_SUCCESS,
  GET_REFERRAL_PROVIDER_FAILURE,
  GET_SPECIALTY_LIST_REQUESTED,
  GET_SPECIALTY_LIST_SUCCESS,
  GET_SPECIALTY_LIST_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getSpecialtyListSaga(action) {
  try {
    const result = yield call(api.getSpecialtyList, action.payload);
    yield put({
      type: GET_SPECIALTY_LIST_SUCCESS,
      payload: result.data.resultObject
    });
  } catch (error) {
    yield put({ type: GET_SPECIALTY_LIST_FAILURE, error });
  }
}

function* getReferralProviderSaga(action) {
  try {
    const result = yield call(api.getSpecialtyList, action.payload);
    yield put({ type: GET_REFERRAL_PROVIDER_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: GET_REFERRAL_PROVIDER_FAILURE, error });
  }
}

export function* getSpecialtyListWatcherSaga() {
  yield takeLatest(GET_SPECIALTY_LIST_REQUESTED, getSpecialtyListSaga);
}

export function* referralProviderWatcherSaga() {
  yield takeLatest(GET_REFERRAL_PROVIDER_REQUESTED, getReferralProviderSaga);
}
