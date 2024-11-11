import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Chef() {
  const [activeTab, setActiveTab] = useState('Recipes');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Chinese', 'Bangla', 'Continental'];
  const recipes = [
    {
      category: 'Drinks',
      title: 'Spiced Chai Cafe',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
    {
      category: 'Chinese',
      title: 'Fried Crispy Chicken with sausage',
      image: 'https://via.placeholder.com/100', // Cambia esta URL a la imagen real
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header con icono de notificación */}
      <View className="flex-row justify-between items-center px-12 pt-10 pb-8">
        <Ionicons name="arrow-back-outline" size={24} className="text-gray-500 mt-9" />
        <Ionicons name="notifications" size={24} className="text-gray-500 mt-9" />
      </View>

      {/* Sección de perfil */}
      <View className="items-center mt-0">
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Cambia esta URL por la imagen real
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-xl font-bold mt-2">Sergio Michel</Text>
        <Text className="text-gray-500">Sp_checo</Text>
      </View>

      {/* Tarjetas de estadísticas */}
      <View className="flex-row mt-6 justify-center">
        <View className="w-26 items-center mx-3 p-5 bg-gray-100 rounded-lg">
          <Text className="text-lg font-bold">1.2k</Text>
          <Text className="text-gray-500">Followers</Text>
        </View>
        <View className="w-26 items-center mx-3 p-5 bg-gray-100 rounded-lg">
          <Text className="text-lg font-bold">598</Text>
          <Text className="text-gray-500">Recipes</Text>
        </View>
        <View className="w-26 items-center mx-3 p-5 bg-gray-100 rounded-lg">
          <Text className="text-lg font-bold">2.9k</Text>
          <Text className="text-gray-500">Views</Text>
        </View>
      </View>

      {/* Botón de Editar perfil y subir archivo */}
      <View className="flex-row justify-center items-center mt-4 space-x-4">
        <TouchableOpacity className="flex-1 bg-gray-200 py-3 rounded-md items-center mx-5">
          <Text className="text-gray-700 font-bold">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-200 p-3 rounded-md mx-5">
          <Ionicons name="cloud-upload" size={24} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Tabs de Recipes y Reviews */}
      <View className="flex-row justify-center mt-5 border-b border-gray-200">
        <TouchableOpacity onPress={() => setActiveTab('Recipes')} className={`px-4 py-2 ${activeTab === 'Recipes' ? 'border-b-2 border-orange-500' : ''}`}>
          <Text className={activeTab === 'Recipes' ? 'text-orange-500 font-bold' : 'text-gray-500'}>Recipes (598)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Reviews')} className={`px-4 py-2 ${activeTab === 'Reviews' ? 'border-b-2 border-orange-500' : ''}`}>
          <Text className={activeTab === 'Reviews' ? 'text-orange-500 font-bold' : 'text-gray-500'}>Reviews</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Recipes' ? (
        <>
          {/* Filtros de categoría */}
          <ScrollView horizontal className="flex flex-row mt-2 px-5 space-x-10">
            {categories.map((category) => (
              <TouchableOpacity
              style ={{marginRight:20, alignItems:"center", width:120, height:50, borderRadius:10}}
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`rounded-lg h-[100px] w-auto px-5 py-5 ${selectedCategory === category ? 'bg-orange-100' : 'bg-gray-100'
                  }`}
              >
              
              <Text className={selectedCategory === category ? 'text-orange-500 font-bold' : 'text-gray-500'}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Lista de Recetas */}
          <ScrollView className="px-6 mt-4 flex-1 pb-[300px]">
            {recipes.map((recipe, index) => (
              <View key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 flex-row">
                <Image
                  source={{ uri: recipe.image }}
                  className="w-20 h-20 rounded-lg mr-4"
                />
                <View style={{ flex: 1 }}>
                  <Text className="text-orange-500 font-bold">{recipe.category}</Text>
                  <Text className="font-bold text-lg mt-1">{recipe.title}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        /* Lista de Reviews */
        <ScrollView className="px-6 mt-8 flex-1">
          {/* Review 1 */}
          <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <View className="flex-row items-start">
              <Image
                source={{ uri: 'https://via.placeholder.com/50' }} // Imagen de usuario
                className="w-12 h-12 rounded-full mr-4"
              />
              <View style={{ flex: 1 }}>
                <View className="flex-row justify-between items-center">
                  <Text className="font-bold">John Smith</Text>
                  <Text className="text-gray-500">50 min ago</Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star-outline" size={16} color="orange" />
                </View>
                <Text className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View className="flex-row items-center mt-2">
                  <Ionicons name="heart-outline" size={16} color="gray" />
                  <Text className="text-gray-500 ml-1">5</Text>
                  <Ionicons name="happy-outline" size={16} color="orange" className="ml-4" />
                </View>
              </View>
            </View>
          </View>

          {/* Review 2 */}
          <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <View className="flex-row items-start">
              <Image
                source={{ uri: 'https://via.placeholder.com/50' }} // Imagen de usuario
                className="w-12 h-12 rounded-full mr-4"
              />
              <View style={{ flex: 1 }}>
                <View className="flex-row justify-between items-center">
                  <Text className="font-bold">Alana Jacks</Text>
                  <Text className="text-gray-500">1 day ago</Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star" size={16} color="orange" />
                  <Ionicons name="star-outline" size={16} color="orange" />
                </View>
                <Text className="text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View className="flex-row items-center mt-2">
                  <Ionicons name="heart-outline" size={16} color="gray" />
                  <Text className="text-gray-500 ml-1">7</Text>
                  <Ionicons name="happy-outline" size={16} color="orange" className="ml-4" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
