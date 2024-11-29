import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function SmallButton({title, action}) {
  return (
    <TouchableOpacity onPress={action} style={{height: hp(4)}} className="flex bg-orange-500 mt-2 rounded-md py-2 justify-center items-center">
          <Text className="text-white text-sm font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}