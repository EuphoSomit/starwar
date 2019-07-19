import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_PLANET_LIST_REQUESTED,
  GET_PLANET_LIST_SUCCESS,
  GET_PLANET_LIST_FAILURE
} from '../constants/constant.action';
import { api } from '../services';

function* getPlanetListSaga(action) {
  try {
    const result = yield call(api.getPlanetList, action.payload);
    yield put({ type: GET_PLANET_LIST_SUCCESS, payload: result.data.results });
  } catch (error) {
    yield put({ type: GET_PLANET_LIST_FAILURE, error });
  }
}

export function* planetListWatcherSaga() {
  yield takeLatest(GET_PLANET_LIST_REQUESTED, getPlanetListSaga);
}
