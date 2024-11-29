import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationBar from '@/components/navigation/NavigationBar'
import UserFoodList from '@/components/extra/UserFoodList';
import { useLocalSearchParams } from 'expo-router';

export default function DeviceFood() {

  const params = useLocalSearchParams();
  const { deviceInfo } = params || '{}'; // Asegúrate de que nunca sea `undefined`
  const device = JSON.parse(deviceInfo);

  // console.log(ingredients)

  return (
    <View style={{paddingBottom: hp(4)}} className='flex-1'>
      <NavigationBar title={'Food in Device'} />
      <View style={{paddingHorizontal: hp(4)}}>
        <UserFoodList deviceId={device._id} food={device.ingredients} />
      </View>
    </View>
  )
}