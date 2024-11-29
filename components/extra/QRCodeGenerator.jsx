import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const QRCodeGenerator = ({device}) => {    

    return (
        <View style={{paddingHorizontal: hp(4)}} className='flex-1 items-center'>
            <QRCode
                value={JSON.stringify(device)} // Convierte el objeto en JSON
                size={170} // Tamaño del QR
                color="black"
                backgroundColor="white"
            />
        </View>
    );
};


export default QRCodeGenerator;
