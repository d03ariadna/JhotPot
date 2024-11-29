import { Colors } from '@/constants/Colors';
import React from 'react'
import { View, ActivityIndicator } from 'react-native';


export default function Loading() {
    return (
        <View className='flex-1 justify-center items-center'>
            <ActivityIndicator size={50} color={Colors.light['primary']} />
        </View>
    )
}