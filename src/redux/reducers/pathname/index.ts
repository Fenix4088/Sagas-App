import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    pathname: string
}

const initialState: InitialState = {
    pathname: window.location.pathname
}

const pathnameSlice = createSlice({
    name: 'pathname',
    initialState,
    reducers: {
        setPathname(state, action: PayloadAction<string>) {
            state.pathname = action.payload
        }
    }
})

export const {setPathname} = pathnameSlice.actions;
export default pathnameSlice.reducer;