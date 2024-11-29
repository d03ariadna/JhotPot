import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "../user/userData";
import { fetchUserRecipes } from "./userRecipes";
import { createRecipe } from "../recipes/recipes";

const initialState = {
    userRecipes: [],
    isLoading: false,
    error: null,
};

const userRecipesSlice = createSlice({
    name: 'userRecipes',
    initialState,
    reducers: {
        clearData: (state) => {
            state.userRecipes = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch recipes
        builder.addCase(fetchUserRecipes.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUserRecipes.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userRecipes = payload;
        });
        builder.addCase(fetchUserRecipes.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        // Update User Recipes
        builder.addCase(createRecipe.fulfilled, (state, { payload }) => {
            state.userRecipes.push(payload);
        });
        

        

    },
});

export const { clearData } = userRecipesSlice.actions;
export default userRecipesSlice.reducer;
