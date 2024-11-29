import UserView from '@/components/globals/UserView';
import { useRecipesStore } from '@/hooks/store/useRecipesStore';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {useState, useMemo, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Chef() {

  const router = useRouter();

  const params = useLocalSearchParams();
  const { chefInfo } = params || '{}'; // Asegúrate de que nunca sea `undefined`
  const chef = JSON.parse(chefInfo);

  const {recipes, startFetchAllRecipes} = useRecipesStore();

  // const [chefRecipes, setChefRecipes] = useState([]);

  useEffect(() => {
    startFetchAllRecipes();
  }, []);

  const chefRecipes = useMemo(() => {
      return recipes.filter(recipe => recipe.chefId === chef.id);
  }, [recipes, chef.id]); 

  const handleFollow = () => {
    alert('follow');
  }
  
  return (
    <UserView currentUser={false} userInfo={chef} userRecipes={chefRecipes} action={handleFollow} />
  );
}
