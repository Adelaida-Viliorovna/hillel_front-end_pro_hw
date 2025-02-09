// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
import axios from "axios";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    result: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchInfoStart(state) {
      state.loading = true;
      state.error = null;
    },
    setInfo(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    fetchInfoError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearInfo(state) {
      state.result = [];
      state.error = null;
    },
  },
});

export const { fetchInfoStart, setInfo, fetchInfoError, clearInfo } = apiSlice.actions;

export const fetchInfo = (query) => async (dispatch) => {
  dispatch(fetchInfoStart());
  try {
    const response = await axios.get(`https://swapi.dev/api/${query}`);
    dispatch(setInfo(response.data));
  } catch (error) {
    dispatch(fetchInfoError(error.message));
  }
};

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
});

// const initialState = {
//     result: [],
//     error: null,
//     loading: false,
// };

// function apiReducer(state = initialState, action) {
//     switch (action.type) {
//         case "FETCH_INFO_START":
//             return { ...state, loading: true, error: null };
//         case "SET_INFO":
//             return { ...state, result: action.payload, loading: false };
//         case "FETCH_INFO_ERROR":
//             return { ...state, error: action.payload, loading: false };
//         case "CLEAR_INFO":
//             return { ...state, result: [], error: null };
//         default:
//             return state;
//     }
// }

// export const fetchInfo = (query) => async (dispatch) => {
//     dispatch({ type: "FETCH_INFO_START" });
//     try {
//         const response = await axios.get(`https://swapi.dev/api/${query}`);
//         dispatch({ type: "SET_INFO", payload: response.data });
//     } catch (error) {
//         dispatch({ type: "FETCH_INFO_ERROR", payload: error.message });
//     }
// };

// export const clearInfo = () => ({ type: "CLEAR_INFO" });

// export const store = createStore(apiReducer, applyMiddleware(thunk));
