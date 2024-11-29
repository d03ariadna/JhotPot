import { View, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors'

export default function TextInp({placehld}) {
    return (
        <View style={{maxHeight: hp(7), height: hp(7)}} className="flex-1 bg-white ">
            <TextInput
                className="flex-1 text-base p-4 placeholder:text-sixth"
                placeholder={placehld}
                placeholderTextColor={Colors.light['third']} // Asegúrate de que 'third' exista en tus colores
                // Añade otros props necesarios aquí
            />
        </View>
    )
}