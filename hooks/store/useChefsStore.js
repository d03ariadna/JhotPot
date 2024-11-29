import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { addReview, fetchChefs } from "@/src/store/chefs/chefs";

export const useChefsStore = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice user
    const { chefs, isLoading, error } = useSelector((state) => state.chefs);
    const {token} = useSelector((state) => state.auth);

    // Fetch User Data
    const startFetchChefs = async() => {        
        try {
            await dispatch(fetchChefs(token)).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Chefs failed:", error);
        }
    };

    const startAddReview = async ({ userId, content, rating, emoji }) => {
        // console.log('Nuevo comentario para: ', userId, content, emoji, rating);
        try {
            await dispatch(addReview({ userId, reviewerId: token, content, rating, emoji })).unwrap();
        } catch (error) {
            console.error("Adding review failed:", error);
        }
    };



    return {
        chefs,
        isLoading,
        error,

        // Métodos
        startFetchChefs,
        startAddReview,
    };
};

