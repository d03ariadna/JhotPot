import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SideBar() {
  return (
    <View className='h-screen  w-20 pt-16 bg-fourth flex justify-start gap-32 items-center'>
        <View className=' flex gap-6'>
          <Ionicons name="menu" size={20}></Ionicons>
          <Ionicons name="search" size={20} ></Ionicons>
        </View>
        <View className=' w-60 mb-20' style={{ transform: [{ rotate: '-90deg' }] }}>
          <Text className='text-xl font-semibold text-black'>What I have Refrigerator</Text>
        </View>
        <View className='' style={{transform: [{rotate:'-90deg'}]}}>
          <Text className='text-xl font-semibold text-fifth'>Drinks</Text>
        </View>
        <View className='' style={{transform: [{rotate:'-90deg'}]}}>
          <Text className='text-xl font-semibold text-fifth'>Snacks</Text>
        </View>
        <View className='' style={{transform: [{rotate:'-90deg'}]}}>
          <Text className='text-xl font-semibold text-fifth'>Food</Text>
        </View>
      </View>
  )
}