import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuth } from "@/src/store";
import { useRouter } from "expo-router";
import { fetchUserData, updateUserData } from "@/src/store/user/userData";

export const useUserStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { userData, isFetching, error } = useSelector((state) => state.user);

    // Fetch User Data
    const startFetchData = async (userId) => {        
        try {
            await dispatch(fetchUserData(userId)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("User Data failed:", error);
        }
    };

    const startUpdatingData = async (userId, userData) => {
        try {
            await dispatch(updateUserData({ userId, userData })).unwrap();
            router.replace('/(app)/(tabs)/profile/');
        } catch (error) {
            console.error("User Data update failed:", error);
        }
    };


    return {
        userData,
        isFetching,
        error,

        // Métodos
        startFetchData,
        startUpdatingData,
    };
};

