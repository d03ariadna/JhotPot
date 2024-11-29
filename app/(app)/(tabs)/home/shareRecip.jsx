import { View, Text } from 'react-native'
import React from 'react'
import ShareButton from '@/components/globals/Buttons/ShareButton'

export default function shareRecip() {
    return (
        <View className='flex-1 items-center justify-center'>
            <ShareButton />
        </View>
    )
}