import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../Buttons/Button';
import ThirdButton from '../Buttons/ThirdButton';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { Shadows } from '@/constants/Shadows';
import SaveRecipeButton from '../Buttons/SaveRecipeButton';
import { getRandomColor } from '@/utils/getRandomColor';


export default function BigRecipe({recipe}) {

  const router = useRouter();

  // console.log(recipe);

  const color = getRandomColor(recipe.id);
  const handleView = () => {
    router.push({
      pathname: '/(app)/(tabs)/home/recipe',
      params: {recipeInfo: JSON.stringify(recipe)}
    });
  }

  const handleAdd = () => {
    alert('Add');
  }

  return (
    <View
      className="relative rounded-3xl"
      style={[ Shadows.sm, { backgroundColor: color, height: hp(56), width: wp(63), padding: hp(2), marginTop: wp(8), marginRight: wp(5), alignSelf: 'center' }]}>
      {/* Imagen de comida en la parte superior */}
      <View  className="absolute -top-16 -right-28 -translate-x-1/2 rounded-full w-52 h-52 shadow-lg justify-center items-center">
        <Image
          source={{uri: recipe.images[0]}} // Reemplaza con tu imagen
          // className="w-48 h-48 rounded-full bg-white border-2 border-lime-400"
          className='w-48 h-48 rounded-full'
        />
      </View>

      {/* Contenido textual */}
      <View className="mt-28">
        <View style={{height: hp(28)}} >
          <Text className="text-xs text-orange-600 font-semibold">| {recipe.category}</Text>
          <Text className="text-4xl font-semibold tracking-wider mt-3">{recipe.name}</Text>
          <Text
            className="text-gray-600 my-2 leading-7 font-regular"
            numberOfLines={6} // Número de líneas permitidas
            ellipsizeMode="tail" // Cómo se muestran los puntos suspensivos
          >
            {recipe.description}
          </Text>
        </View>

        {/* Información de tiempo e ingredientes */}
        <View className="flex-row justify-between mt-2 mb-2">
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={18} color="gray" />
            <Text className="text-gray-600 ml-1 font-bold">{recipe.preparationTime} min</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="leaf-outline" size={18} color="gray" />
            <Text className="text-gray-600 ml-1 font-bold">{recipe.ingredients.length} ing</Text>
          </View>
        </View>

        {/* Botón de "View Recipe" */}
        <View className='flex-row gap-5 mt-5'>
          <View className='w-16'>
            <View className='flex-1 bg-primary/40 items-center justify-center rounded-xl text-white flex'>
              <SaveRecipeButton id={recipe.id} />
            </View>
            {/* <ThirdButton
              title={<Ionicons name="add-circle-outline" size={26} color={Colors.light['primary']} />}
              action={handleAdd} /> */}
          </View>
          <Button
            title={'View Recipe'}
            action={handleView} />
        </View>
      </View>
    </View>
  );
}
