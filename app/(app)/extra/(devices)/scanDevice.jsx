import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Back from '@/components/globals/Buttons/Back'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationBar from '@/components/navigation/NavigationBar';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '@/components/globals/Buttons/Button';
import ScanQR from '@/components/globals/ScanQR';


export default function Scanning() {
  return (
    <View className='flex-1'>
      <StatusBar style="inverted" />
      <NavigationBar title={'Scan by QR code'} />
      
      <View style={{ marginHorizontal: hp(5), padding: hp(3)}} className='bg-fourth border border-sixth rounded-xl items-center'>
        <Text style={{marginBottom: hp(5), marginTop: hp(2)}} className='w-2/3 text-center font-medium text-text'>You can search near by devices or scan by QR code</Text>
        <ScanQR routeToOpen={ '/(app)/extra/(devices)/showDeviceData' } />

        <Text style={{ marginTop: hp(10), marginBottom: hp(2) }} className='text-center font-medium text-text mb-7'>Or enter device code</Text>
        <View className='w-full flex-col gap-8'>
          <TextInput className='bg-white rounded-lg text-base p-4 placeholder:text-sixth' placeholder='Device Code' />
          <Button title={'Search'} action={() => alert('s')} />
        </View>
      </View>
    </View>
  )
}