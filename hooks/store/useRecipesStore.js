import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { createRecipe, fetchAllRecipes, fetchFilteredRecipes } from "@/src/store/recipes/recipes";

export const useRecipesStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { recipes, isLoading, error } = useSelector((state) => state.recipes);

    // Fetch User Data
    const startFetchAllRecipes = async () => {        
        try {
            await dispatch(fetchAllRecipes()).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Recipes failed:", error);
        }
    };

    const startFetchFilteredRecipes = async (filters) => {
        try {
            await dispatch(fetchFilteredRecipes(filters)).unwrap();
        } catch (error) {
            console.error("Recipes failed:", error);
        }
        // console.log('from hook: ',filters);
    };

    const startAddRecipe = async (recipe) => {
        try {
            await dispatch(createRecipe(recipe)).unwrap();
            router.replace('/(app)/(tabs)/profile');
        } catch (error) {
            console.error("Recipes failed:", error);
        }
    };




    return {
        recipes,
        isLoading,
        error,

        // Métodos
        startFetchAllRecipes,
        startFetchFilteredRecipes,
        startAddRecipe
    };
};

