import { createSlice } from "@reduxjs/toolkit";
import { fetchSaved, fetchShared, setShared, toggleSaved } from "./saved_shared";


const initialState = {
    saved: [],
    shared: [],
    isLoading: false,
    error: null,
};

const saved_sharedSlice = createSlice({
    name: 'saved_shared',
    initialState,
    reducers: {
        clearData: (state) => {
            state.saved = [];
            state.shared = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch saved
        builder.addCase(fetchSaved.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchSaved.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.saved = payload;
        });
        builder.addCase(fetchSaved.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        //Fetch shared
        builder.addCase(fetchShared.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchShared.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.shared = payload;
        });
        builder.addCase(fetchShared.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        //Toggle saved
        builder.addCase(toggleSaved.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(toggleSaved.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.saved = payload;
        });
        builder.addCase(toggleSaved.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        //Set shared
        builder.addCase(setShared.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(setShared.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.shared = payload;
        });
        builder.addCase(setShared.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        });



        

    },
});

export const { clearData } = saved_sharedSlice.actions;
export default saved_sharedSlice.reducer;
