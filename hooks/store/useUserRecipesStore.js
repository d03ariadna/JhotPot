import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { fetchUserRecipes } from "@/src/store/userRecipes/userRecipes";

export const useUserRecipesStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { userRecipes, isLoading, error } = useSelector((state) => state.userRecipes);

    // Fetch User Data
    const startFetchUserRecipes = async (userId) => {        
        try {
            await dispatch(fetchUserRecipes(userId)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("User Recipes failed:", error);
        }
    };



    return {
        userRecipes,
        isLoading,
        error,

        // Métodos
        startFetchUserRecipes,
    };
};

