import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchUserData = createAsyncThunk(
    "/users/userData",
    async (userId, {rejectWithValue}) => {
        // console.log('tofetch', userId);
        try {
                const {data} = await jhotPotApi.get(`/users/userData/${userId}`, {
            });
            
            const user = data.user;

            return user;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching User Data failed");
        }
    }
);


export const updateUserData = createAsyncThunk(
    "/users/updateUserData",
    async ({ userId, userData }, { rejectWithValue }) => {
        try {
            console.log(userId, userData);
            const {data} = await jhotPotApi.put(`/users/${userId}`, userData);
            return data.user;
        } catch (error) {
            return rejectWithValue(error.response.data.message || "Updating User Data failed");
        }
    }
);


