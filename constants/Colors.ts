/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { StyleSheet } from "react-native";

const tintColorLight = '#FC6011';
const tintColorDark = '#fff';


export const Colors = {
  light: {
    text: '#11181C',
    background: '#FFF',
    tint: tintColorLight,
    icon: '#FC6011',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#FC6011',
    secondary: '#11263C',
    third: '#52616B',
    fourth: '#F0F5F9',
    fifth: '#ffe7da',
    sixth: '#c9d6df'
  },
  dark: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorDark,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
};

export const Styles = StyleSheet.create({
  tabActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: Colors['light'].fifth,
    borderRadius: 10,
    borderColor: Colors['light'].primary,
    borderWidth: 1,
  },
  tabDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: 'transparent',
    borderWidth: 0,
  }
});
