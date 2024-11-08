import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({action, title}) {
  return (
    <TouchableOpacity onPress={action} className='w-full bg-primary p-5 rounded-xl text-white flex items-center'>
        <Text className='text-white text-base font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}