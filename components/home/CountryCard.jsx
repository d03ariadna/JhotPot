import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function CountryCard({title, img}) {
    return (
        <View className='flex-1 justify-center items-center  mr-7'>
            <View style={{width: wp(15), height: hp(9)}} className='bg-fourth shadow-black shadow-md rounded-2xl mb-2 justify-center items-center'>
                <Image source={img} className='w-12 h-12'></Image>
            </View>
            <Text className='text-xs font-medium text-third'>{title}</Text>
        </View>
    )
}