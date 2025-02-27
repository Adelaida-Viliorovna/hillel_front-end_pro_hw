import { all, call } from 'redux-saga/effects';
import { watcher } from './watchers';

export function* rootSaga() {
    yield all([
        call(watcher),
    ]);
}