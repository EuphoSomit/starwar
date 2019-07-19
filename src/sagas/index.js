import { all } from 'redux-saga/effects';
import { peopleDetailWatcherSaga } from './saga.peopleDetail';

export default function* root() {
  yield all([peopleDetailWatcherSaga()]);
}
