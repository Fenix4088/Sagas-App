import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {GetPeopleResp, Person} from '../../../types';

export interface InitialState {
  page: number;
  search: string;
  loading: boolean;
  error: null | string;
  data: GetPeopleResp | null;
}

const initialState: InitialState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<{ search: string; page: number }>) {
      state.loading = true;
      state.page = action.payload.page;
      state.search = action.payload.search;
    },
    loadUsersSuccess(state, action: PayloadAction<GetPeopleResp>) {
      state.loading = false;
      state.data = action.payload;
    },
    loadUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {loadUsers, loadUsersSuccess, loadUsersFailure} = peopleSlice.actions;
export default peopleSlice.reducer;
