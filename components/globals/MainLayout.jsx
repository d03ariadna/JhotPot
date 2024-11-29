import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';
import { Slot, useRouter, useSegments } from "expo-router";
import '@/global.css';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '@/hooks/store/useAuth';
import LoadingScreen from '../UI/LoadingScreen';
import { useUserStore } from '@/hooks/store/useUserStore';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const { token, isAuth, isLoading, checkAuthToken } = useAuth();
  const {userData, isFetching, startFetchData} = useUserStore();
  const segments = useSegments();
  const router = useRouter();

  const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
        try {
          await checkAuthToken();
          
        } catch (error) {
            console.error('Error initializing auth:', error);
        } finally {
            setIsInitializing(false);
        }
        };

      setTimeout(() => {
        initializeAuth();
      }, 3000);
    }, []);

  useEffect(() => {
    // console.log('Is Authenticated:', isAuth);
    // console.log('Segments before:', segments);
    if (isInitializing || typeof isAuth === 'undefined') return;
    
    isAuth ? startFetchData(token) : null;
    
    const inApp = segments[0] === '(app)';
    const inAuth = segments[0] === '(auth)';
    const isSignIn = segments[1] === 'signIn';
    const isSignUp = segments[1] === 'signUp';
    
    if (isAuth && !inApp) {
      router.replace('/(app)/(tabs)/home/');
    } else if (!isAuth && !inAuth) {
      // console.log('Segments:', segments);
      // console.log('Redirecting to sign in');
      console.log('sign in')
      router.replace('/(auth)/signIn');
    }

  }, [isAuth, segments, isInitializing]);

  useEffect(() => {
    const currentSegments = router.segments || [];
    if (currentSegments.includes('+not-found')) {
      // Redirigir automáticamente si estás en +not-found
      router.replace('/(auth)/signIn');
    }
  }, [router]);
    
    

  return (
      <>
      <Slot />
      {/* {(isInitializing || isLoading) && (
        // Renderiza la pantalla de carga encima del contenido
        <LoadingScreen />
      )} */}
    </>
  );
};

export default MainLayout;
