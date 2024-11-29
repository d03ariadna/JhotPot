import { Image, StyleSheet, FlatList, ScrollView, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';

import SideBar from '@/components/home/SideBar';
import BigRecipe from '@/components/globals/RecipeViews/BigRecipe';
import { StatusBar } from 'expo-status-bar';
import CountryCard from '@/components/home/CountryCard';
import { countries } from '@/data/Countries';
import { data } from '@/data/Data';
import { getRandomColor } from '@/utils/getRandomColor';
import { useState, useEffect } from 'react';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';
import { useAuth } from '@/hooks/store/useAuth';
import { useRecipesStore } from '@/hooks/store/useRecipesStore';
import Loading from '@/components/globals/Loading';
import { useSaved_SharedStore } from '@/hooks/store/useSaved_SharedStore';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';

const generateTitles = (userIngredients) => [
  {
    title: 'Simple recipy with your ',
    subtitle: 'fridge\'s ingredients',
    category: "",
    ingredients: userIngredients.length > 0 ? userIngredients.map(ingredient => ingredient.ingredientId) : [],
  },
  { title: 'Simple recipy for ', subtitle: 'Food', category: "Food", ingredients: [] },
  { title: 'Simple recipy for ', subtitle: 'Drinks', category: "Drink", ingredients: [] },
  { title: 'Simple recipy for ', subtitle: 'Snacks', category: "Snacks", ingredients: [] },
];

export default function Home() {

  const { token } = useAuth();
  const { userIngredients, isLoading, startFetchUserIngredients } = useUserIngredientsStore();
  const { recipes, isLoadingRecipes = isLoading, startFetchAllRecipes, startFetchFilteredRecipes } = useRecipesStore();
  const { saved, shared, isLoadingSaved = isLoading, startFetchSaved, startFetchShared } = useSaved_SharedStore();
  const { startFetchDevices } = useDevicesStore();

  const isAnyLoading = isLoading || isLoadingRecipes || isLoadingSaved;

  let titles = generateTitles(userIngredients);

  const [selectedCountires, setSelectedCountries] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  // const [titleValue, setTitleValue] = useState(tabIndex);
  const [filters, setFilters] = useState(
    tabIndex === 0 && userIngredients.length == 0
        ? { category: 'none' }
        :
    {
    category: titles[tabIndex].category,
    ingredients: titles[tabIndex].ingredients
  });

  const initializeData = async () => {
    await Promise.all([startFetchUserIngredients(token), startFetchSaved(), startFetchShared(), startFetchDevices(token)]);
    // Si userIngredients sigue vacío, carga todas las recetas
    if (userIngredients.length === 0) {
      startFetchAllRecipes();
    }
  };
  useEffect(() => {
    initializeData();
  }, []);

  // useEffect(() => {
  //   console.log(selectedCountires);
  // }, [selectedCountires])
  console.log('filters: ', filters);

  useEffect(() => {
    const newFilters =
      tabIndex === 0 && userIngredients.length == 0
        ? {
          category: 'none'
        }
        :
        {
          category: titles[tabIndex].category,
          ingredients: titles[tabIndex].ingredients,
          tags: selectedCountires.length > 0 ? selectedCountires : [],
        };

    if (JSON.stringify(filters) !== JSON.stringify(newFilters)) {
      setFilters(newFilters);
    }
  }, [tabIndex, selectedCountires]);

  useEffect(() => {
    // if ((filters.category || filters.ingredients.length > 0) && userIngredients.length > 0) {
      startFetchFilteredRecipes(filters);
      console.log(recipes.length)
    // }
  }, [filters]);

  useEffect(() => {
  // Actualiza los títulos y filtros cuando cambien los userIngredients
    titles = generateTitles(userIngredients);

    const newFilters = {
      category: titles[tabIndex].category,
      ingredients: titles[tabIndex].ingredients,
    };

    if (JSON.stringify(filters) !== JSON.stringify(newFilters)) {
      setFilters(newFilters);
    }
  }, [userIngredients]);




  return (
    <View className="flex-row">
      <StatusBar style='inverted' backgroundColor='white'/>
      {/* Barra lateral fija */}
      <SideBar tab={tabIndex} setTab={setTabIndex} />

      {/* Contenido desplazable */}
      
          <View style={{height: hp(93), width: wp(78), marginLeft: wp(4), paddingTop: hp(6)}} className="flex-col justify-between">
            {/* Aquí va el contenido que se desplazará */}
            <Text style={{height: hp(5)}} className="text-xl tracking-wider font-medium">
              {titles[tabIndex].title}
              <Text className='text-primary font-semibold'> {titles[tabIndex].subtitle}</Text>
            </Text>

            <FlatList
              data={countries}
              contentContainerStyle={{paddingHorizontal: hp(2)}}
              renderItem={({ item }) =>
                <CountryCard
                  selected={selectedCountires}
                  setSelected={setSelectedCountries}
                  title={item.title}
                  img={item.img}
                  value={item.value}
                />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />

        {/* List of Recipes */}
        <View style={{ height: hp(67) }}>
          
        {
           isAnyLoading
            ? <Loading/>
              :
              recipes.length === 0
                ?
                <View className='flex-1 justify-center'>
                  <Text className="text-center text-lg font-medium text-sixth">No recipes found with these filters</Text>
                </View>
                :
                  <FlatList
                    data={recipes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BigRecipe recipe={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
          }
        </View>
            
            {/* Repite o añade más texto para probar el desplazamiento */}
          </View>
          
    </View>
  );
}
