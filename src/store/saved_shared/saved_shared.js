import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchSaved = createAsyncThunk(
    "/users/savedRecipes",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/users/savedRecipes/${userId}`, {
            });

            return data.savedRecipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Saved Recipes failed");
        }
    }
);

export const fetchShared = createAsyncThunk(
    "/users/sharedRecipes",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/users/sharedRecipes/${userId}`, {
            });

            return data.sharedRecipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Shared Recipes failed");
        }
    }
);


export const toggleSaved = createAsyncThunk(
    "/users/savedRecipes/toggle",
    async ({ userId, recipeId }, { rejectWithValue }) => {
        // console.log("user: ",userId);
        try {
            const {data} = await jhotPotApi.put(`/users/savedRecipes/${userId}`, {recipeId});

            return data.savedRecipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Toggling Saved Recipe failed");
        }
    }
);


export const setShared = createAsyncThunk(
    "/users/sharedRecipes/set",
    async ({userId, recipeId}, {rejectWithValue}) => {
        try {
            const {data} = await jhotPotApi.put(`/users/sharedRecipes/${userId}`, {recipeId});

            return data.sharedRecipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Setting Shared Recipe failed");
        }
    }
);





