import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RecipeCard() {
  return (
    <View className="relative bg-orange-100 rounded-3xl w-80 h-[475px] p-5">
      {/* Imagen de comida en la parte superior */}
      <View className="absolute -top-8 -right-8 -translate-x-1/2 bg-white rounded-full w-32 h-32 shadow-lg justify-center items-center">
        <View
        //   source={{ uri: 'https://example.com/your-image.jpg' }} // Reemplaza con tu imagen
          className="w-48 h-48 rounded-full bg-white border-2 border-lime-400"
        />
      </View>

      {/* Contenido textual */}
      <View className="mt-28">
        <Text className="text-xs text-orange-600 font-semibold">| Chinese</Text>
        <Text className="text-4xl font-extrabold tracking-wider mt-3">Hot & Prawn Noodles</Text>
        <Text className="text-gray-600 my-4 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </Text>

        {/* Información de tiempo e ingredientes */}
        <View className="flex-row justify-between mt-2 mb-8">
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={18} color="gray" />
            <Text className="text-gray-600 ml-1 font-bold">20 min</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="leaf-outline" size={18} color="gray" />
            <Text className="text-gray-600 ml-1 font-bold">5 ing</Text>
          </View>
        </View>

        {/* Botón de "View Recipe" */}
        <View className='flex-row gap-5'>
          <TouchableOpacity className="w-16 bg-orange-500 mt-4 rounded-xl py-4 items-center">
            <Ionicons name="leaf-outline" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-grow bg-orange-500 mt-4 rounded-xl py-4 items-center">
            <Text className="text-white font-semibold">View Recipe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
