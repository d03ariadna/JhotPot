import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { fetchSaved, fetchShared, setShared, toggleSaved } from "@/src/store/saved_shared/saved_shared";
import { useAuth } from "./useAuth";

export const useSaved_SharedStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const {token} = useAuth();

    // Accede al estado del slice user
    const { saved, shared, isLoading, error } = useSelector((state) => state.saved_shared);

    // Fetch User Data
    const startFetchSaved = async() => {        
        try {
            await dispatch(fetchSaved(token)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Saved Recipes failed:", error);
        }
    };

    const startFetchShared = async () => {
        try {
            await dispatch(fetchShared(token)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Shared Recipes failed:", error);
        }
    };

    const startToggleSaved = async (recipeId) => {
        try {
            await dispatch(toggleSaved({userId: token, recipeId})).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Toggle Saved Recipe failed:", error);
        }
    };

    const startSetShared = async (recipeId) => {
        try {
            await dispatch(setShared({userId: token, recipeId})).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Set Shared Recipe failed:", error);
        }
    };




    return {
        saved,
        shared,
        isLoading,
        error,

        // Métodos
        startFetchSaved,
        startFetchShared,
        startToggleSaved,
        startSetShared,
    };
};

