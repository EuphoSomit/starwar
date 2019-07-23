import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_PEOPLE_REQUESTED,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getPeopleSaga(action) {
  try {
    const result = yield call(api.getPeople, action.payload);
    yield put({
      type: GET_PEOPLE_SUCCESS,
      payload: result.data.results
    });
  } catch (error) {
    yield put({ type: GET_PEOPLE_FAILURE, error });
  }
}

export function* peopleWatcherSaga() {
  yield takeLatest(GET_PEOPLE_REQUESTED, getPeopleSaga);
}
