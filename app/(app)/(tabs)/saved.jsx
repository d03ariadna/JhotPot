import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SavedRecipesHeader() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Chinese', 'Continental', 'Bangla'];

  const recipes = [
    {
      category: 'Snacks',
      title: 'Sweetmeat French Dessert',
      time: '50 min',
      ingredients: '8 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    {
      category: 'Chinese',
      title: 'Chicken with Spicy Noodles',
      time: '25 min',
      ingredients: '5 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    {
      category: 'Chinese',
      title: 'Crispy Buffalo Chicken Wings',
      time: '30 min',
      ingredients: '6 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    {
      category: 'Drinks',
      title: 'Spiced Chai Cafe',
      time: '15 min',
      ingredients: '3 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    {
      category: 'Drinks',
      title: 'Spiced Chai Cafe',
      time: '15 min',
      ingredients: '3 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },

    {
      category: 'Drinks',
      title: 'Spiced Chai Cafe',
      time: '15 min',
      ingredients: '3 ing',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="mt-10 flex-row justify-between items-center px-4 py-3 bg-white border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-lg font-light text-gray-500 ml-2">Saved</Text>
        </View>
        <Text className="text-sm text-gray-500">22 recipes</Text>
      </View>

      {/* Carrusel de categorías */}
      <ScrollView horizontal className="flex flex-row mt-2 px-5 space-x-10">
        {categories.map((category) => (
          <TouchableOpacity
            style={{ marginRight: 20, alignItems: "center", width: 120, height: 50, borderRadius: 20 }}
            key={category}
            onPress={() => setSelectedCategory(category)}
            className={`rounded-lg h-[100px] w-auto px-5 py-5 ${
              selectedCategory === category ? 'bg-orange-100' : 'bg-gray-100'
            }`}
          >
            <Text className={selectedCategory === category ? 'text-orange-500 font-bold' : 'text-gray-500'}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de tarjetas de recetas */}
      <ScrollView className="px-4" style={{ marginTop: -10}}>
        {recipes.map((recipe, index) => (
          <View
            key={index}
            className="flex-row bg-white rounded-lg shadow-lg p-4 mb-4 items-center"
            style={{ elevation: 4 }} // Agrega una sombra en Android
          >
            {/* Imagen de la receta */}
            <Image
              source={{ uri: recipe.image }}
              className="w-20 h-20 rounded-lg mr-4"
            />

            {/* Información de la receta */}
            <View className="flex-1">
              <Text className="text-orange-500 text-xs font-bold">{recipe.category}</Text>
              <Text className="text-lg font-bold text-gray-800 mt-1">{recipe.title}</Text>
              <View className="flex-row items-center mt-2 space-x-4">
                {/* Tiempo de preparación */}
                <View className="flex-row items-center">
                  <Ionicons name="time-outline" size={16} color="gray" />
                  <Text className="text-gray-500 ml-1 text-xs">{recipe.time}</Text>
                </View>
                {/* Número de ingredientes */}
                <View className="flex-row items-center">
                  <Ionicons name="restaurant-outline" size={16} color="gray" />
                  <Text className="text-gray-500 ml-1 text-xs">{recipe.ingredients}</Text>
                </View>
              </View>
            </View>

            {/* Icono de compartir */}
            <TouchableOpacity className="p-2">
              <Ionicons name="share-social-outline" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
