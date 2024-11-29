import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Button({action, title}) {
  return (
    <TouchableOpacity onPress={action} className='flex-grow border border-primary bg-primary p-5 rounded-xl text-white flex items-center'>
        <Text className='text-white text-base font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}