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

export function* watcher() {
  yield takeLatest(fetchInfoStart.type, callFetchInfoStart);
  yield takeEvery("FETCH_TODOS", fetchTodos);
  yield takeEvery("ADD_TODO_REQUEST", addTodoSaga);
  yield takeEvery("REMOVE_TODO_REQUEST", removeTodoSaga);
  yield takeEvery("CLEAR_TODOS_REQUEST", clearTodosSaga);
  yield takeEvery("TOGGLE_COMPLETE_TODO", toggleCompleteTodoSaga);
}
