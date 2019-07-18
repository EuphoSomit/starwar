import { all } from 'redux-saga/effects';
import { memberSearchWatcherSaga } from './saga.memberSearch';
import { memberDetailWatcherSaga } from './saga.memberDetail';
import {
  referralProviderWatcherSaga,
  getSpecialtyListWatcherSaga
} from './saga.referralProvider';
import {
  referralManagementWatcherSaga,
  extendReferralWatcherSaga
} from './saga.referralManagement';

export default function* root() {
  yield all([
    memberSearchWatcherSaga(),
    memberDetailWatcherSaga(),
    referralProviderWatcherSaga(),
    getSpecialtyListWatcherSaga(),
    referralManagementWatcherSaga(),
    extendReferralWatcherSaga()
  ]);
}
