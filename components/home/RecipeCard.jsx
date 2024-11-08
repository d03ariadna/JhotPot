import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function RecipeCard() {
  return (
    <View style={{height: hp(55), width: wp(65), padding: hp(3), marginTop: wp(8), alignSelf: 'center'}} className="relative bg-orange-100 rounded-3xl">
      {/* Imagen de comida en la parte superior */}
      <View className="absolute -top-16 -right-28 -translate-x-1/2 rounded-full w-52 h-52 shadow-lg justify-center items-center">
        <Image
          source={require('@/assets/images/noodle.jpg')} // Reemplaza con tu imagen
          // className="w-48 h-48 rounded-full bg-white border-2 border-lime-400"
          className='w-48 h-48 rounded-full'
        />
      </View>

      {/* Contenido textual */}
      <View className="mt-28">
        <Text className="text-xs text-orange-600 font-semibold">| Chinese</Text>
        <Text className="text-4xl font-extrabold tracking-wider mt-3">Hot & Prawn Noodles</Text>
        <Text className="text-gray-600 my-2 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </Text>

        {/* Información de tiempo e ingredientes */}
        <View className="flex-row justify-between mt-2 mb-2">
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
