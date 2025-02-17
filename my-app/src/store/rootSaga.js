// my-app\src\store\rootSaga.js

import { all, call } from "redux-saga/effects";
import { todoWatcher } from "./watchers";

export default function* rootSaga() {
  yield all([call(todoWatcher),]);
}
