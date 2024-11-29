import { View, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';

export default function ScanQR({routeToOpen}) {

    const router = useRouter();

    const handleScan = () => {
        router.replace(
            {
                pathname: '/(app)/extra/openCamera',
                params: { routeToOpen: routeToOpen}
            }
        );
    }

    return (
        <TouchableWithoutFeedback onPress={handleScan}>
            <Image source={require('@/assets/images/qrCode.png')} style={{height: hp(20), width: hp(20)}} />
        </TouchableWithoutFeedback>
    )
}