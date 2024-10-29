import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import SideBar from '@/components/home/SideBar';
import RecipeCard from '@/components/home/RecipeCard';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-row">
      <StatusBar style='inverted' backgroundColor='white'/>
      {/* Barra lateral fija */}
      <SideBar/>

      {/* Contenido desplazable */}
      <View className="pt-16 h-[95%]  w-[90%] flex-col justify-between pl-8 p-4">
        {/* Aquí va el contenido que se desplazará */}
        <Text className="text-xl tracking-wider font-medium mb-4">
          Simple recipy with your 
          <Text className='text-primary font-semibold'> fridge's ingredients</Text>
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='flex-row'>
          <View className='bg-fourth w-20 h-24 mr-7 shadow-black shadow-xl rounded-2xl flex-1 justify-center items-center'>
            <Text>All</Text>
          </View>
          <View className='bg-fourth w-20 h-24 mr-7 shadow-black shadow-md rounded-2xl flex-1 justify-center items-center'>
            <Text>All</Text>
          </View>
          <View className='bg-fourth w-20 h-24 mr-7 shadow-black shadow-md rounded-2xl flex-1 justify-center items-center'>
            <Text>All</Text>
          </View>
          <View className='bg-fourth w-20 h-24 mr-7 shadow-black shadow-md rounded-2xl flex-1 justify-center items-center'>
            <Text>All</Text>
          </View>
        </ScrollView>

        <ScrollView
          className='  flex flex-grow'
          horizontal={true}
          contentContainerStyle={{ padding: 10,  alignItems: 'flex-end', gap: 20}} // Espacio al inicio y al final
          showsHorizontalScrollIndicator={false} // Espacio al inicio y al final
        >
          {/* Tarjeta 1 */}
          <RecipeCard />

          {/* Tarjeta 2 */}
          <RecipeCard />

          {/* Tarjeta 3 */}
          <RecipeCard />

          {/* Añade más tarjetas según sea necesario */}
        </ScrollView>

        
        {/* Repite o añade más texto para probar el desplazamiento */}
      </View>
    </View>
  );
}
