// my-app\src\store\watchers.js

import { takeEvery, takeLatest } from "redux-saga/effects";
import { fetchTodos, addTodoSaga, removeTodoSaga, clearTodosSaga, toggleCompleteTodoSaga } from "./workers";

export function* todoWatcher() {
  yield takeEvery("FETCH_TODOS", fetchTodos);
  yield takeEvery("ADD_TODO_REQUEST", addTodoSaga);
  yield takeEvery("REMOVE_TODO_REQUEST", removeTodoSaga);
  yield takeEvery("CLEAR_TODOS_REQUEST", clearTodosSaga);
  yield takeEvery("TOGGLE_COMPLETE_TODO", toggleCompleteTodoSaga);
}