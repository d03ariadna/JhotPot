import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';


const measures = [
    {
        title: 'g'
    },
    {
        title: 'kg'
    },
    {
        title: 'ml'
    },
    {
        title: 'l'
    },
    {
        title: 'pz'
    },
    {
        title: 'tz'
    }

]

export default function SelectMeasure({quantity, activeMeasure, setQuantity, setActiveMeasure}) {

    

    const handleSelect = (title) => {
        setActiveMeasure(title);
    }

    return (
        <View style={{marginVertical: hp(1)}}>
            <Text className='text-text font-regular text-sm mb-2'>Quantity</Text>
            <TextInput
                style={{ height: hp(7)}}
                className="flex-grow text-base pl-4 bg-white text-third"
                placeholder="Quantity"
                placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                value={quantity}
                onChangeText={setQuantity}
                // Añade otros props necesarios aquí
            />
            <FlatList
                style={{marginTop: hp(2)}}
                data={measures}
                keyExtractor={(item) => item.title}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item.title)}>
                        <View key={item.title} className={`${activeMeasure === item.title ? 'border-primary' : 'border-white'} bg-white border-2 rounded-xl py-2 px-8 mr-5`}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}