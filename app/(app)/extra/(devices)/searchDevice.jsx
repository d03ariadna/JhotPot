import { View, Text } from 'react-native'
import React from 'react'
import Back from '@/components/globals/Buttons/Back'
import NavigationBar from '@/components/navigation/NavigationBar'
import ScanningCircle from '@/components/extra/ScanningCircle'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function SearchDevice() {
    return (
        <View className='flex-1 items-center bg-primary'>
            <NavigationBar title={'Search Near by Device'} light />
            <View style={{ marginTop: hp(20)  }}>
                <ScanningCircle />
            </View>
        </View>
    )
}