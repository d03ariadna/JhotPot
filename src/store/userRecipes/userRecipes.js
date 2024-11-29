import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchUserRecipes = createAsyncThunk(
    "/recipes/userId",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/recipes/user/${userId}`, {
            });
            
            const userRecipes = data.recipes;

            return userRecipes;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching User Recipes failed");
        }
    }
);






