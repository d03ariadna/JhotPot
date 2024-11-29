import { createSlice } from "@reduxjs/toolkit";
import { createRecipe, fetchAllRecipes, fetchFilteredRecipes } from "./recipes";


const initialState = {
    recipes: [],
    isLoading: false,
    error: null,
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        clearData: (state) => {
            state.recipes = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch recipes
        builder.addCase(fetchAllRecipes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllRecipes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.recipes = action.payload;
        });
        builder.addCase(fetchAllRecipes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        //Fetch filtered recipes
        builder.addCase(fetchFilteredRecipes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchFilteredRecipes.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.recipes = payload;
        });
        builder.addCase(fetchFilteredRecipes.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });


        // Create Recipe
        builder.addCase(createRecipe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createRecipe.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.recipes.push(payload);
        });
        builder.addCase(createRecipe.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });




        

    },
});

export const { clearData } = recipesSlice.actions;
export default recipesSlice.reducer;
