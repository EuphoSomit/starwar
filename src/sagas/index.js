import { all } from 'redux-saga/effects';
import { peopleWatcherSaga } from './saga.people';
import { planetListWatcherSaga } from './saga.planets';

export default function* root() {
  yield all([peopleWatcherSaga(), planetListWatcherSaga()]);
}
