import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { View } from 'react-native';
import { Slot, useRouter, useSegments } from "expo-router";
import { useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthContextProvider, useAuth } from '@/context/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const { isAuth } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuth === 'undefined') return;

    const inApp = segments[0] === '(app)';

    if (isAuth && !inApp) {
      router.replace('(tabs)/');
    } else if (!isAuth) {
      router.replace('/signIn');
    }
  }, [isAuth, segments, router]);

  return <Slot />;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Puedes mostrar un spinner u otra pantalla de carga aquí.
  }

  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}
