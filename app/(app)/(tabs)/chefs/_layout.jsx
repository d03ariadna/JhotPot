import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Configura si deseas mostrar el encabezado de navegación
      }}
    />
  );
}
