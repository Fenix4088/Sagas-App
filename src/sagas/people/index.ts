import { API } from '../../rest';
import { call, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { GetPeopleResp } from '../../types';
import { loadUsers, loadUsersSuccess } from '../../redux/reducers/people';
import { setPathname } from '../../redux/reducers/pathname';
import { PayloadAction } from '@reduxjs/toolkit';

export function* loadPeopleDetails() {}

export function* loadPeopleList({ payload }: any) {
  const { page, search } = payload;
  const peopleData: GetPeopleResp = yield call(API.getPeople, page, search);
  yield put(loadUsersSuccess({...peopleData}));
}

export function* loadUsersOnRoutEnter() {
  while (true) {
    const pathnameAction: PayloadAction<string> = yield take(setPathname);
    if (pathnameAction.payload === '/') {
      const { page, search } = yield select((s) => s.peopleReducer);

      yield put(loadUsers({ page, search }));
    }
  }
}

export function* peopleSaga() {
  yield fork(loadUsersOnRoutEnter);
  yield takeLatest(loadUsers, loadPeopleList);
}
