import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_PEOPLE_DETAIL_REQUESTED,
  GET_PEOPLE_DETAIL_SUCCESS,
  GET_PEOPLE_DETAIL_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getPeopleDetailSaga(action) {
  try {
    const result = yield call(api.getPeopleDetail, action.payload);
    yield put({ type: GET_PEOPLE_DETAIL_SUCCESS, payload: result.results });
  } catch (error) {
    yield put({ type: GET_PEOPLE_DETAIL_FAILURE, error });
  }
}

export function* peopleDetailWatcherSaga() {
  yield takeLatest(GET_PEOPLE_DETAIL_REQUESTED, getPeopleDetailSaga);
}
