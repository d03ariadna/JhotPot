import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, validateKey } from './auth';

const initialState = {
    token: null, //userID
    isAuth: false,
    isLoading: true,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            state.token = payload.token;
            state.isAuth = true;
            state.isLoading = false;
        },
        logout: (state) => {
            state.token = null;
            state.isAuth = false;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        
        //Login
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.token = payload.token;
            state.isAuth = true;
        });
        builder.addCase(loginUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });

        //Register
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, {payload}) => {
            state.isLoading = false;
        });
        builder.addCase(registerUser.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });


        //Validate Key
        builder.addCase(validateKey.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(validateKey.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.token = payload;
            state.isAuth = true;
        });
        builder.addCase(validateKey.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });


    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
