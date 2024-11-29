import { View, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Back from '../globals/Buttons/Back'

export default function NavigationBar({title, light}) {
    return (
        <View style={{ paddingTop: hp(4), paddingHorizontal: hp(4)}} className='flex-row w-full items-center mb-10 relative z-10'>
            {
                light ? <Back light /> : <Back />
            }
            <Text className={`mt-9 ml-3 font-semibold text-base ${light ? 'text-white' : 'text-text'}`}>{title}</Text>
        </View>
    )
}