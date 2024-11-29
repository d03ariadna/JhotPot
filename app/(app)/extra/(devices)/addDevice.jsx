import { View, Text } from 'react-native'
import React from 'react'
import Back from '@/components/globals/Buttons/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import {Image} from 'react-native';
import Button from '@/components/globals/Buttons/Button';
import OutlineButton from '@/components/globals/Buttons/OutlineButton';
import { useRouter } from 'expo-router';
import NavigationBar from '@/components/navigation/NavigationBar';


export default function AddDevice() {

  const router = useRouter();

  const handleSearch = () => {
    router.push('/(app)/extra/(devices)/searchDevice');
  }

  const handleScan = () => {
    router.push('/(app)/extra/(devices)/scanDevice');
  }

  return (
    <View className='flex-1' style={{paddingBottom: hp(5)}}>
      <StatusBar backgroundColor={Colors.light['primary']} />

      <View className='w-screen relative items-center'>
        <Image 
          source={require('@/assets/images/orangeCard.png')}
          className='w-full aspect-auto absolute z-1'
          resizeMode='cover'
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 16 / 17,
            top: hp(-8),
          }}
        />
        <NavigationBar title={'Add New Device'} light/>

        <Text className='text-center text-white font-regular text-2xl'>Let's Add your</Text>
        <Text className='text-center text-white font-semibold text-2xl mt-1'>Regrigerator</Text>
        
        <Image
          source={require('@/assets/images/fridge.png')}
          className='relative w-20 h-24'
          style={{ top: hp(17), left: wp(1)  }} />

      </View>
      
      <View
        className='flex-1 flex-col justify-between items-center'
        style={{ marginTop: hp(30), paddingHorizontal: hp(4) }}>
        <View style={{width: wp(60)}}>
            <Text className='bg-white text-center font-medium text-text'>You can search near by devices or scan by QR code</Text>
        </View>
        
        <View className='w-full flex-col gap-5'>
          <OutlineButton title={'Scan by QR code'} action={handleScan} />
          <Button title={'Search Near by Devices'} action={handleSearch} />
        </View>
      </View>


    </View>
  )
}