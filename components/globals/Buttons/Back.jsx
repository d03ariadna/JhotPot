import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';

export default function Back({light}) {

    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
                name="chevron-back" size={24}
                color={ light ? 'white' : Colors.light['third']}
                className="mt-9" />
        </TouchableOpacity>
    )
}