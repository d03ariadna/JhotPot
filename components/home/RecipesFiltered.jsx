import { View, FlatList } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HorizontalRecipe from '../globals/RecipeViews/HorizontalRecipe';
// import { data } from '@/data/Data';
import { useRouter } from 'expo-router';


export default function RecipesFiltered({data=[]}) {

  const router = useRouter();

  const handleOpenRecipe = () => {
    router.push('/(app)/(tabs)/home/recipe');
  }
  return (
    <View style={{paddingBottom: hp(9)}}>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          style={{ marginTop: hp(4) }}
          renderItem={
            ({ item }) =>
              <HorizontalRecipe recipe={item} />
          }
        />
    </View>
  )
}