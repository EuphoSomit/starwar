import { all } from 'redux-saga/effects';
import { peopleDetailWatcherSaga } from './saga.peopleDetail';
import { planetListWatcherSaga } from './saga.planets';

export default function* root() {
  yield all([peopleDetailWatcherSaga(), planetListWatcherSaga()]);
}
