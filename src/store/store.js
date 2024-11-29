import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import userRecipesReducer from './userRecipes/userRecipesSlice';
import userIngredientsReducer from './ingredients/userIngredientsSlice';
import devicesReducer from './devices/devicesSlice';
import chefsReducer from './chefs/chefsSlice';
import saved_sharedReducer from './saved_shared/saved_sharedSlice';
import recipesReducer from './recipes/recipesSlice';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        userRecipes: userRecipesReducer,
        userIngredients: userIngredientsReducer,
        devices: devicesReducer,
        chefs: chefsReducer,
        saved_shared: saved_sharedReducer,
        recipes: recipesReducer,
    },
    devTools: false,
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(devToolsEnhancer()),
});