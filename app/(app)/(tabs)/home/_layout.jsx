import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Configura si deseas mostrar el encabezado de navegación
      }}
    />
  );
}
