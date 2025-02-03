import { createStore } from "redux";

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter((_, i) => i !== action.payload) };
    case "CLEAR_TODOS":
      return { ...state, todos: [] };
    default:
      return state;
  }
}

export const store = createStore(todoReducer);
