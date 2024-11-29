import { Stack } from 'expo-router';

export default function DevicesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Configura si deseas mostrar el encabezado de navegación
      }}
    />
  );
}
