import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationBar from '@/components/navigation/NavigationBar'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ingredients } from '@/data/Ingredients';
import HorizontalIng from '@/components/globals/Ingredients/HorizontalIng';
import { useRouter } from 'expo-router';
import UserFoodList from '@/components/extra/UserFoodList';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';

export default function Food() {
  
  
  const { userIngredients } = useUserIngredientsStore();

  return (
    <View style={{paddingBottom: hp(4)}} className='flex-1'>
      <NavigationBar title={'Food Manager'}/>
      <View style={{paddingHorizontal: hp(4)}}>
        

        <UserFoodList />
      </View>
    </View>
  )
}