import { createSlice } from "@reduxjs/toolkit";
import { addReview, fetchChefs } from "./chefs";


const initialState = {
    chefs: [],
    isLoading: false,
    error: null,
};

const chefsSlice = createSlice({
    name: 'chefs',
    initialState,
    reducers: {
        clearData: (state) => {
            state.chefs = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch chefs
        builder.addCase(fetchChefs.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchChefs.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.chefs = payload;
        });
        builder.addCase(fetchChefs.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        //Add review
        builder.addCase(addReview.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addReview.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.chefs = payload;
        });
        builder.addCase(addReview.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });

        

    },
});

export const { clearData } = chefsSlice.actions;
export default chefsSlice.reducer;
