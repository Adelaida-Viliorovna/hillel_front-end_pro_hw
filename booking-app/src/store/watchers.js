import { takeLatest } from "redux-saga/effects";
import { fetchHotelsRequest } from "./store";
import { fetchHotelsData } from "./workers";

export function* watcher() {
    yield takeLatest(fetchHotelsRequest.type, fetchHotelsData);
}
