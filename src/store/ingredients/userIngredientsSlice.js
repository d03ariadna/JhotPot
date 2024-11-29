import { createSlice } from "@reduxjs/toolkit";
import { addNewIngredient, deleteIngredient, fetchUserIngredients } from "./userIngredients";
import { deleteDevice } from "../devices/devices";


const initialState = {
    userIngredients: [],
    isLoading: false,
    error: null,
};

const userIngredientsSlice = createSlice({
    name: 'userIngredients',
    initialState,
    reducers: {
        clearData: (state) => {
            state.userIngredients = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch ingredients
        builder.addCase(fetchUserIngredients.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUserIngredients.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userIngredients = payload;
        });
        builder.addCase(fetchUserIngredients.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });

        // Add new ingredient
        builder.addCase(addNewIngredient.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addNewIngredient.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userIngredients.push(payload);
        });
        builder.addCase(addNewIngredient.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });


        // Delete ingredient
        builder.addCase(deleteIngredient.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteIngredient.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userIngredients = state.userIngredients.filter((ingredient) => ingredient.id !== payload);
        });
        builder.addCase(deleteIngredient.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });


        //Delete device from ingredient
        builder.addCase(deleteDevice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteDevice.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.userIngredients = state.userIngredients.map(ingredient => {
                // Si el deviceId coincide con el payload, se actualiza a null
                if (ingredient.deviceId === payload) {
                    return {
                        ...ingredient,
                        deviceId: null, // Marcar como null
                    };
                }
                return ingredient; // Dejar los demás ingredientes sin cambios
            });
        });
        builder.addCase(deleteDevice.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload.message;
        });



        

    },
});

export const { clearData } = userIngredientsSlice.actions;
export default userIngredientsSlice.reducer;
