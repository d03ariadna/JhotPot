import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchAllRecipes = createAsyncThunk(
    "/recipes",
    async (_, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get('/recipes/', {
            });

            return data.recipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Recipes failed");
        }
    }
);

export const fetchFilteredRecipes = createAsyncThunk(
    "/recipes/filter",
    async (filters, {rejectWithValue}) => {
        try {
            // console.log('filters', filters);
            const {data} = await jhotPotApi.post('/recipes/criteria', filters);

            return data.recipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Recipes failed");
        }
    }
);

export const createRecipe = createAsyncThunk(
    "/recipes/create",
    async (recipe, {rejectWithValue}) => {
        try {
            const {data} = await jhotPotApi.post('/recipes/', recipe);

            return data.recipe;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Creating Recipe failed");
        }
    }
);






