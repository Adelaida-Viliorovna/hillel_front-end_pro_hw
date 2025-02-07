import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

const initialState = {
    result: [],
    error: null,
    loading: false,
};

function apiReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_INFO_START":
            return { ...state, loading: true, error: null };
        case "SET_INFO":
            return { ...state, result: action.payload, loading: false };
        case "FETCH_INFO_ERROR":
            return { ...state, error: action.payload, loading: false };
        case "CLEAR_INFO":
            return { ...state, result: [], error: null };
        default:
            return state;
    }
}

export const fetchInfo = (query) => async (dispatch) => {
    dispatch({ type: "FETCH_INFO_START" });
    try {
        const response = await axios.get(`https://swapi.dev/api/${query}`);
        dispatch({ type: "SET_INFO", payload: response.data });
    } catch (error) {
        dispatch({ type: "FETCH_INFO_ERROR", payload: error.message });
    }
};

export const clearInfo = () => ({ type: "CLEAR_INFO" });

export const store = createStore(apiReducer, applyMiddleware(thunk));
