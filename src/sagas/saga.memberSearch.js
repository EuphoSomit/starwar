import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_MEMBER_SEARCH_REQUESTED,
  GET_MEMBER_SEARCH_SUCCESS,
  GET_MEMBER_SEARCH_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getMemberSearchSaga(action) {
  try {
    const result = yield call(api.findMember, action.payload);
    yield put({ type: GET_MEMBER_SEARCH_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: GET_MEMBER_SEARCH_FAILURE, error });
  }
}

export function* memberSearchWatcherSaga() {
  yield takeLatest(GET_MEMBER_SEARCH_REQUESTED, getMemberSearchSaga);
}
