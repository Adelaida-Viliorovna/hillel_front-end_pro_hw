import { call, put } from "redux-saga/effects";
import axios from "axios";
import { fetchApiSuccess, fetchApiError } from "./store";

function fetchHotels(payload) {
    const { destination, checkIn, checkOut, guests } = payload;
    const apiUrl = process.env.REACT_APP_API_URL;
    return axios.get(`${apiUrl}/hotels?city=${destination}`);
}

export function* fetchHotelsData(action) {
    try {
        const response = yield call(fetchHotels, action.payload);
        yield put(fetchApiSuccess(response.data));
    } catch (error) {
        yield put(fetchApiError(error.message));
    }
}
