import { View, Image, Text, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function ScanningCircle() {
    // Crear referencias de animación para la opacidad de los círculos mediano y grande
    const opacityMedium = useRef(new Animated.Value(0)).current;
    const opacityLarge = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Función para iniciar la animación en secuencia
        const animateRadar = () => {
            Animated.sequence([
                Animated.timing(opacityMedium, {
                    toValue: 1,
                    duration: 700,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(opacityLarge, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                })
            ]).start(() => {
                // Reiniciar las opacidades para repetir la animación
                opacityMedium.setValue(0);
                opacityLarge.setValue(0);
                animateRadar();
            });
        };

        animateRadar();
    }, [opacityMedium, opacityLarge]);

    return (
        <View style={{marginTop: hp(10)}} className='flex justify-center items-center'>

            <Animated.View style={{ opacity: opacityLarge }} className='w-96 h-96 rounded-full bg-white/30 absolute' />

            <Animated.View style={{ opacity: opacityMedium }} className='w-72 h-72 rounded-full bg-white/60 absolute' />

            <View className='w-52 h-52 rounded-full bg-white/90 flex justify-center items-center'>
                <Image source={require('@/assets/images/logo.png')} className='w-28 h-14' />
                <Text className='text-text font-medium text-sm mt-2'>Scanning...</Text>
            </View>
        </View>
    );
}
