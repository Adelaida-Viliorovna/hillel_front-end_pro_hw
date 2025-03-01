import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  callFetchInfoStart,
  addTodoSaga,
  removeTodoSaga,
  clearTodosSaga,
  toggleCompleteTodoSaga,
  fetchTodos,
} from "./workers";
import { fetchInfoStart } from "./store";
import {
  fetchTodosRequest,
  addTodoRequest,
  removeTodoRequest,
  clearTodosRequest,
  toggleCompleteTodoRequest,
} from "./store";

export function* watcher() {
  yield takeLatest(fetchInfoStart.type, callFetchInfoStart);
  yield takeEvery(fetchTodosRequest.type, fetchTodos);
  yield takeEvery(addTodoRequest.type, addTodoSaga);
  yield takeEvery(removeTodoRequest.type, removeTodoSaga);
  yield takeEvery(clearTodosRequest.type, clearTodosSaga);
  yield takeEvery(toggleCompleteTodoRequest.type, toggleCompleteTodoSaga);
}
