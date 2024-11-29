import { View, Text, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';

export default function LoadingScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{width: wp(32), height: wp(16)}}/>
      <Text className='my-5 font-medium text-sixth text-sm'>Recipy with your fridge's ingredients</Text>
      <ActivityIndicator size={20} color={Colors.light['sixth']} />
    </View>
  )
}