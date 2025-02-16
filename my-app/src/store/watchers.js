// my-app\src\store\watchers.js

import { takeLatest } from "redux-saga/effects";
import { fetchTodos, addTodoSaga, removeTodoSaga, clearTodosSaga, toggleCompleteTodoSaga } from "./workers";

export function* todoWatcher() {
  yield takeLatest("FETCH_TODOS", fetchTodos);
  yield takeLatest("ADD_TODO_REQUEST", addTodoSaga);
  yield takeLatest("REMOVE_TODO_REQUEST", removeTodoSaga);
  yield takeLatest("CLEAR_TODOS_REQUEST", clearTodosSaga);
  yield takeLatest("TOGGLE_COMPLETE_TODO", toggleCompleteTodoSaga);
}