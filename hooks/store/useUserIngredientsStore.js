import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { addNewIngredient, deleteIngredient, fetchUserIngredients } from "@/src/store/ingredients/userIngredients";

export const useUserIngredientsStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { userIngredients, isLoading, error } = useSelector((state) => state.userIngredients);

    // Fetch User Data
    const startFetchUserIngredients = async(userId) => {        
        try {
            await dispatch(fetchUserIngredients(userId)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Ingredients failed:", error);
        }
    };

    const startAddingIngredient = async (ingredient) => {
        try {
            console.log('ingredient', ingredient);
            await dispatch(addNewIngredient(ingredient)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Adding Ingredient failed:", error);
        }
    };


    const startDeleteIngredient = async (ingredientId) => {
        try {
            await dispatch(deleteIngredient(ingredientId)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Deleting Ingredient failed:", error);
        }
    };




    return {
        userIngredients,
        isLoading,
        error,

        // Métodos
        startFetchUserIngredients,
        startAddingIngredient,
        startDeleteIngredient
    };
};

