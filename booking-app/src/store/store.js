import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const sagaMiddleware = createSagaMiddleware();

const apiSlice = createSlice({
    name: "api",
    initialState: {
        result: [],
        error: null,
        loading: false,
    },
    reducers: {
        fetchHotelsRequest(state, action) {
            state.loading = true;
        },
        fetchApiSuccess(state, action) {
            state.result = action.payload;
            state.loading = false;
        },
        fetchApiError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchHotelsRequest, fetchApiSuccess, fetchApiError } = apiSlice.actions;

export const store = configureStore({
    reducer: {
        api: apiSlice.reducer,
        router: routerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
