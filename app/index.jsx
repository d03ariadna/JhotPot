import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingScreen() {
  return (
    <View className='flex-1 justify-center items-center bg-primary'>
      <View className='w-96 h-96 rounded-full bg-white/30 flex justify-center items-center'>
        <View className='w-72 h-72 rounded-full bg-white/60 flex justify-center items-center'>
          <View className='w-52 h-52 rounded-full bg-white/90 flex justify-center items-center'>
            <ActivityIndicator size={50} color='orange' />
          </View>
        </View>
      </View>
    </View>
  )
}