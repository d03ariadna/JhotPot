import { View, Text } from 'react-native'
import React from 'react'
import ScanQR from '../globals/ScanQR'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../globals/Buttons/Button';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';


export default function AddbyQR() {

    const {devices} = useDevicesStore();
    return (
        <View className='flex-1 justify-between'>
            {
                devices.length === 0
                    ? <Text className='text-center text-primary mt-24 font-medium text-lg'>To add a new ingredient is necessary to at least have one device</Text>
                    :
                    <View style={{padding: hp(4), height: hp(35)}} className='border border-sixth rounded-lg items-center'>
                        <Text style={{marginBottom: hp(3)}} className='font-medium text-sm text-text'>You can scan QR code</Text>
                        <ScanQR routeToOpen={'(app)/extra/(food)/showFoodData'} />
                    </View>

            }
            
        </View>
    )
}