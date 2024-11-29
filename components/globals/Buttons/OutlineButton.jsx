import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function OutlineButton({action, title}) {
  return (
    <TouchableOpacity onPress={action} className='flex-grow bg-white border-2 border-primary  p-5 rounded-xl text-white flex items-center'>
        <Text className='text-primary text-base font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}