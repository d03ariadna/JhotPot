import { View, TextInput } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors'

export default function TextIcon({editable = true, placehld, icon, value, setValue}) {
    return (
        <View style={{maxHeight: hp(7), height: hp(7)}} className="flex-row flex-1 items-center bg-white ">
            <TextInput
                editable={editable}
                className="flex-1 text-base p-4 placeholder:text-sixth"
                placeholder={placehld}
                placeholderTextColor={Colors.light['third']} // Asegúrate de que 'third' exista en tus colores
                // Añade otros props necesarios aquí
                value={value}
                onChangeText={setValue}
            />
            <View className='mr-4'>{icon}</View>
        </View>
    )
}