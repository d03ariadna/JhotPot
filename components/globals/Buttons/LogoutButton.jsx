import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useAuth } from '@/hooks/store/useAuth';

export default function LogoutButton() {

    const {startLogout} = useAuth();

    return (
        <TouchableOpacity className='mt-9' onPress={startLogout} >
            <AntDesign name="logout" size={24} color={Colors.light['third']} />
        </TouchableOpacity>
    )
}