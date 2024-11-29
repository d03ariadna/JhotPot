import CountriesScroll from '@/components/globals/CountriesScroll';
import HorizontalRecipe from '@/components/globals/RecipeViews/HorizontalRecipe';
import NavigationBar from '@/components/navigation/NavigationBar';
import React, { useEffect, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';
import { data } from '@/data/Data';
import { useRouter } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSaved_SharedStore } from '@/hooks/store/useSaved_SharedStore';
import Loading from '@/components/globals/Loading';
import { useAuth } from '@/hooks/store/useAuth';



export default function Saved() {

  const { saved, shared, isLoading, startFetchSaved, startFetchShared } = useSaved_SharedStore();

  const [savedActive, setSavedActive] = useState(true);
  

  // useEffect(() => {
  //   startFetchSaved();
  //   startFetchShared();
  // }, []);
  
  return (
    <View className='flex-1' style={{paddingBottom: hp(18)}}>
      <NavigationBar title={'Saved'} />
      {
        isLoading 
          ? <Loading />
          : <View className='relative'>
            <Text style={{ top: hp(-6.5), right: hp(4) }} className='absolute font-regular text-text text-sm'>
              { savedActive ? saved.length : shared.length } recipes
            </Text>
              <View style={{paddingHorizontal: hp(4)}}>
                    <View className='flex-row mb-6 border-2 border-primary rounded-md overflow-hidden'>
                        <TouchableOpacity onPress={() => setSavedActive(true)} className={`${savedActive ? 'bg-primary' : 'bg-white'} flex-grow p-3 text-white flex items-center`}>
                            <Text className={`${savedActive ? 'text-white' : 'text-primary'}  text-sm font-semibold`}>Saved</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSavedActive(false)} className={`${savedActive ? 'bg-white' : 'bg-primary text-white'} flex-grow  p-3  flex items-center`}>
                            <Text className={`${savedActive ? 'text-primary' : 'text-white'} text-sm font-semibold`}>Shared</Text>
                        </TouchableOpacity>
                    </View>
                  </View>

              <FlatList
                data={savedActive ? saved : shared}
                keyExtractor={(item) => item.id}
                style={{ marginTop: hp(1), marginBottom: hp(4) }}
                ListHeaderComponent={
                  <View style={{ paddingHorizontal: hp(4) }}>
                    <CountriesScroll />
                  </View>
                }
                renderItem={
                  ({ item }) =>
                  
                    <HorizontalRecipe recipe={item} />
                  
                }
              />

              </View>
              
            }
          </View>
  );
}

