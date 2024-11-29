import { View, Image } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function ProfilePicture({pictureUrl}) {
    return (
        <View>
        {
            pictureUrl === ''
                ?
                <View
                    className="w-24 h-24 rounded-xl border border-sixth bg-fourth flex-row justify-center items-center"
                >
                    <FontAwesome6 name="user" size={24} color={Colors.light['sixth']} />
                </View>
                : 
                <Image
                    source={{ uri: pictureUrl }} // Cambia esta URL por la imagen real
                    className="w-24 h-24 rounded-xl"
                />
            }
        </View>
    )
}