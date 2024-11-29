import { createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from './authSlice';
import jhotPotApi from '@/src/api/jhotPotApi';

export const loginUser = createAsyncThunk(
    "/users/login",
    async ({email, password}, {rejectWithValue}) => {
        
        try {
            const {data} = await jhotPotApi.post('/users/login', {
                email,
                password,
            });
            
            const { token } = data;
            await AsyncStorage.setItem('token', token);

            return data;

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || "Login failed");
        }
    }
);


export const registerUser = createAsyncThunk(
    "/users/register",
    async ({name, email, password, location, profilePictureUrl }, {rejectWithValue}) => {
        try {
            const {data} = await jhotPotApi.post('/users/register', {
                name,
                email,
                password,
                location,
                profilePictureUrl,
            });

            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message || "Register failed");
        }
    }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { dispatch }) => {
    try {
        await AsyncStorage.removeItem('token'); // Eliminar el token del almacenamiento
        
        dispatch(logout()); // Despacha la acción sincrónica para limpiar el estado
        
    } catch (error) {
        console.error('Error removing token:', error);
    }
});

export const validateKey = createAsyncThunk(
    "/users/validateKey",
    async ({ email, secretKey }, { rejectWithValue }) => {
        // console.log('from thunk: ',email, secretKey);
        try {
            const { data } = await jhotPotApi.post('/users/validateKey', {
                email, secretKey,
            });

            const { token } = data;
            await AsyncStorage.setItem('token', token);

            return token;
        } catch (error) {
            return rejectWithValue(error.response.data.message || "Validation failed");
        }
    }
);