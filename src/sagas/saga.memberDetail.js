import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_MEMBER_DETAIL_REQUESTED,
  GET_MEMBER_DETAIL_SUCCESS,
  GET_MEMBER_DETAIL_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getMemberDetailSaga(action) {
  try {
    const result = yield call(api.getMemberDetails, action.payload);
    yield put({ type: GET_MEMBER_DETAIL_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: GET_MEMBER_DETAIL_FAILURE, error });
  }
}

export function* memberDetailWatcherSaga() {
  yield takeLatest(GET_MEMBER_DETAIL_REQUESTED, getMemberDetailSaga);
}
