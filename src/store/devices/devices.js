import { createAsyncThunk } from '@reduxjs/toolkit';
import jhotPotApi from '@/src/api/jhotPotApi';

export const fetchDevices = createAsyncThunk(
    "/smartDevices",
    async (userId, {rejectWithValue}) => {
        try {
                const {data} = await jhotPotApi.get(`/smartDevices/${userId}`, {
            });

            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Fetching Devices failed");
        }
    }
);


export const addDevice = createAsyncThunk(
    "/smartDevices/addNew",
    async (device, {rejectWithValue}) => {
        try {
            const {data} = await jhotPotApi.post(`/smartDevices`, device);

            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Adding Device failed");
        }
    }
);


export const deleteDevice = createAsyncThunk(
    "/smartDevices/delete",
    async (deviceId, {rejectWithValue}) => {
        try {
            await jhotPotApi.delete(`/smartDevices/${deviceId}`);

            return deviceId;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Deleting Device failed");
        }
    }
);





