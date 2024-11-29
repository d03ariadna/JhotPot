import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "./userData";


const initialUserData = {
    name: "",
    profilePictureUrl: "",
    location: "",
    followers: 0,
    views: 0,
    reviews: [],
    id: "",
};
const initialState = {
    userData: initialUserData, //userID
    isFetching: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearData: (state) => {
            state.userInfo = null;
            state.isFetching = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch user data
        builder.addCase(fetchUserData.pending, (state) => {
            state.isFetching = true;
            state.error = null;
        });
        builder.addCase(fetchUserData.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.userData = payload;
        });
        builder.addCase(fetchUserData.rejected, (state, {payload}) => {
            state.isFetching = false;
            state.error = payload.message;
        });

        //Update user data
        builder.addCase(updateUserData.pending, (state) => {
            state.isFetching = true;
            state.error = null;
        });
        builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.userData = payload;
        });
        builder.addCase(updateUserData.rejected, (state, { payload }) => {
            state.isFetching = false;
            state.error = payload.message;
        });

    },
});

export const { clearData } = userSlice.actions;
export default userSlice.reducer;
