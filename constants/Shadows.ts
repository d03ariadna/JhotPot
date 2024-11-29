/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { StyleSheet } from "react-native";

export const Shadows = StyleSheet.create({
    xs: {
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        // Sombra para Android
        elevation: 5,
    },
    sm: {
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        // Sombra para Android
        elevation: 10,
    },
    md: {
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        // Sombra para Android
        elevation: 20,
    },
    lg: {
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        // Sombra para Android
        elevation: 30,
    }
});
