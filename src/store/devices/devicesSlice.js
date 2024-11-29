import { createSlice } from "@reduxjs/toolkit";
import { addDevice, deleteDevice, fetchDevices } from "./devices";
import { addNewIngredient, deleteIngredient } from "../ingredients/userIngredients";


const initialState = {
    devices: [],
    isLoading: false,
    error: null,
};

const devicesSlice = createSlice({
    name: 'devices',
    initialState,
    reducers: {
        clearData: (state) => {
            state.devices = [];
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        
        //Fetch devices
        builder.addCase(fetchDevices.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchDevices.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            const existingDeviceIds = state.devices.map(device => device._id);
            const newDevices = payload.filter(device => !existingDeviceIds.includes(device._id));
            state.devices = [...state.devices, ...newDevices];
        });
        
        builder.addCase(fetchDevices.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        });

        
        //Add device
        builder.addCase(addDevice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addDevice.fulfilled, (state, { payload }) => {
            // console.log('payload: ', payload);
            state.isLoading = false;

            // Add the new device to the devices array if it doesn't already exist
            if (!state.devices.find(device => device._id === payload._id)) {
                state.devices = [...state.devices, payload];
            }

        });
        builder.addCase(addDevice.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });


        //Delete device
        builder.addCase(deleteDevice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteDevice.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.devices = state.devices.filter(device => device._id !== payload);
        });
        builder.addCase(deleteDevice.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });


        //Add ingredient to device
        builder.addCase(addNewIngredient.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addNewIngredient.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            const newIngredient = payload; // Ingrediente recién creado
            const { deviceId, id } = newIngredient;

            // Encuentra el dispositivo y añade el nuevo ingrediente
            const device = state.devices.find((d) => d._id === deviceId);
            if (device) {
                device.ingredients.push(newIngredient);
            }
        });
        builder.addCase(addNewIngredient.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });


        
        //Delete ingredient from device
        builder.addCase(deleteIngredient.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(deleteIngredient.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.devices = state.devices.map((device) => ({
                ...device,
                ingredients: device.ingredients.filter(
                    (ingredient) => ingredient.id !== payload
                ),
            }));
        });
        builder.addCase(deleteIngredient.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });

        

    },
});

export const { clearData } = devicesSlice.actions;
export default devicesSlice.reducer;
