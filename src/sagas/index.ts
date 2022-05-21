import { all } from 'redux-saga/effects';
import {peopleSaga} from "./people";
import {spawn} from "redux-saga/effects";

export function* rootSaga() {
    const sagas = [peopleSaga]
    yield all(sagas.map(saga => spawn(saga)))
}
