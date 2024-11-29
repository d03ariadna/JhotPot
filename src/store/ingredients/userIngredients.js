import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchUserIngredients = createAsyncThunk(
    "/userIngredients",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/userIngredients/${userId}`, {
            });

            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching User Ingredients failed");
        }
    }
);



export const addNewIngredient = createAsyncThunk(
    "/userIngredients/add",
    async (ingredient, { rejectWithValue }) => {
        try {
            const { data } = await jhotPotApi.post(`/userIngredients`, {
                ...ingredient
            });

            return data.userIngredient;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Adding Ingredient failed");
        }
    }
);


export const deleteIngredient = createAsyncThunk(
    "/userIngredients/delete",
    async (ingredientId, { rejectWithValue }) => {
        try {
            await jhotPotApi.delete(`/userIngredients/${ingredientId}`);
            return ingredientId;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Deleting Ingredient failed");
        }
    }
);



