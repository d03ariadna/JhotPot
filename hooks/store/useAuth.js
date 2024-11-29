import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logoutUser, validateKey } from "@/src/store/auth/auth"; // Thunks
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuth } from "@/src/store";
import { useRouter } from "expo-router";

export const useAuth = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    // Accede al estado del slice `auth`
    const { token, isAuth, isLoading, error } = useSelector((state) => state.auth);

    // Inicia sesión
    const startLogin = async (user) => {

        const { email, password } = user;
        
        try {
            await dispatch(loginUser({ email, password })).unwrap(); // `unwrap` lanza el error si ocurre
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    // Registra un nuevo usuario
    const startRegister = async (user) => {

        const { name, email, password, location, profilePictureUrl } = user;
        // console.log(name, email, password, location, profilePictureUrl);
        try {
            await dispatch(registerUser({ name, email, password, location, profilePictureUrl })).unwrap();

            await dispatch(loginUser({ email, password })).unwrap(); // `unwrap` lanza el error si ocurre

        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    // Verifica el token de autenticación (si existe en localStorage)
    const checkAuthToken = async () => {
        const savedToken = await AsyncStorage.getItem("token");
        console.log("Saved token:", savedToken);
        
        if (!savedToken) {
            dispatch(logoutUser());
            return;
        }

        try {
            //dispatch fetch user data
            dispatch(setAuth({ token: savedToken }));
            // await dispatch(fetchUserData(savedToken)).unwrap();

        } catch (error) {
            console.error("Failed fetching user data", error);
            localStorage.removeItem("token");
            dispatch(logout());
        }

        //startLoading Data if there is a token

        // try {
        //     // Aquí puedes agregar lógica para renovar el token si es necesario
        //     // Ejemplo: Validar el token con un endpoint de la API
        //     dispatch(loginUser({ token: savedToken })); // Opcional: Cargar datos básicos
        // } catch (error) {
        //     localStorage.removeItem("token");
        //     dispatch(logout());
        // }
    };

    // Cierra la sesión del usuario
    const startLogout = async () => {
        try {
            router.replace('/'); // Limpia primero la navegación
            setTimeout(() => {
                router.replace('/(auth)/signIn'); // Redirige a signIn
            }, 1000);
            dispatch(logoutUser()); // Maneja el almacenamiento y limpieza
            checkAuthToken();
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const startValidateKey = async (email, secretKey) => {
        
        // console.log(email, secretKey);
        try {
            await dispatch(validateKey({ email, secretKey })).unwrap();
        } catch (error) {
            console.error("Key validation failed:", error);
        }
    };

    // Efecto para verificar el token en el montaje del componente principal
    // useEffect(() => {
    //     checkAuthToken();
    // }, []); // Solo se ejecuta al montar el hook

    return {
        token,
        isAuth,
        isLoading,
        error,

        // Métodos
        startLogin,
        startRegister,
        startLogout,
        checkAuthToken,
        startValidateKey
    };
};

