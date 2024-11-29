import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ThirdButton({action, title}) {
  return (
    <TouchableOpacity onPress={action} className='flex-1 bg-primary/40 items-center justify-center rounded-xl text-white flex'>
        <Text className=''>{title}</Text>
    </TouchableOpacity>
  )
}