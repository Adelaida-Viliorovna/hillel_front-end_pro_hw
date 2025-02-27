import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
  setInfo,
  fetchInfoError,
  setTodos,
  addTodo,
  removeTodo,
  clearTodos,
  toggleComplete,
} from "./store";

function fetchFromApi(query) {
  return axios.get(`https://swapi.dev/api/${query}`);
}

export function* callFetchInfoStart(action) {
  try {
    const response = yield call(fetchFromApi, action.payload);
    yield put(setInfo(response.data));
  } catch (error) {
    yield put(fetchInfoError(error.message));
  }
}
export function* fetchTodos() {
  try {
    const response = yield call(() => axios.get("http://localhost:3000/todos"));
    yield put(setTodos(response.data));
  } catch (error) {
    console.error("Помилка завантаження TODOs:", error);
  }
}

export function* addTodoSaga(action) {
  try {
    const response = yield call(() =>
      axios.post("http://localhost:3000/todos", { text: action.payload })
    );
    yield put(addTodo(response.data));
  } catch (error) {
    console.error("Помилка додавання TODO:", error);
  }
}

export function* removeTodoSaga(action) {
  try {
    yield call(() =>
      axios.delete(`http://localhost:3000/todos/${action.payload}`)
    );
    yield put(removeTodo(action.payload));
  } catch (error) {
    console.error("Помилка видалення TODO:", error);
  }
}

export function* clearTodosSaga() {
  try {
    yield call(() => axios.delete("http://localhost:3000/todos"));
    yield put(clearTodos());
  } catch (error) {
    console.error("Помилка очищення TODOs:", error);
  }
}

export function* toggleCompleteTodoSaga(action) {
  try {
    const response = yield call(() =>
      axios.put(`http://localhost:3000/todos/${action.payload.id}`, {
        completed: action.payload.completed,
      })
    );
    yield put(
      toggleComplete({
        id: action.payload.id,
        completed: action.payload.completed,
      })
    );
  } catch (error) {
    console.error("Помилка оновлення виконання TODO:", error);
  }
}
