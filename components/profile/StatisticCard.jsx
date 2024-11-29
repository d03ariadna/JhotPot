import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function StatisticCard({value, label}) {
  return (
    <View style={{width: wp(18)}} className="items-center py-2 px-3 bg-fourth rounded-lg">
          <Text className="text-2xl font-semibold my-5">{value}</Text>
        <Text className="text-third text-sm font-medium">{label}</Text>
    </View>
  )
}