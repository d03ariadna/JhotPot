import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchChefs = createAsyncThunk(
    "/users/chefs",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/users/chefs/${userId}`, {
            });

            return data.chefs;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Chefs failed");
        }
    }
);

export const addReview = createAsyncThunk(
    "/users/addReview",
    async ({ userId, reviewerId, content, rating, emoji }, { rejectWithValue }) => {
        console.log('Nuevo comentario para: ', userId, content, emoji, rating, "de: ", reviewerId);
        try {
            const {data} = await jhotPotApi.put(`/users/addReview/${userId}`, {reviewerId, content, rating, emoji});

            return data.chefs;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Adding Review failed");
        }
    }
);





