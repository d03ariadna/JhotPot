import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, Easing } from 'react-native';
import React, { useState, useRef } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '@/components/globals/Button';
import ToggleSwitch from '@/components/globals/ToggleSwitch';
import { useRouter } from 'expo-router';
import ChefRegister from '@/components/globals/ChefRegister';
import RegisterForm from '@/components/globals/RegisterForm';
import { useAuth } from '@/context/AuthContext';

export default function SignUp() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showChefForm, setShowChefForm] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;

    const {login, register} = useAuth();

    const router = useRouter();
  
    
    const handleContinue = () => {
        // if (isEnabled) {
            // Iniciar animación para desplazar el formulario principal hacia la izquierda
        Animated.timing(animationValue, {
            toValue: -wp(100), // Desplazar hacia la izquierda
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start(() => setShowChefForm(true));
        // } else {
            //     register();
            // }
        };
        
        const handleBack = () => {
            // Invertir la animación para regresar al formulario principal
            Animated.timing(animationValue, {
                toValue: 0, // Regresar a la posición original
                duration: 500,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start(() => setShowChefForm(false));
        };
        
        
        
        const handleSignUp = () => {
            register();
        };
    
    return (
        <View className='flex-1 bg-primary justify-end'>
            

            <View style={{height: hp(90)}} className='rounded-tl-[5rem] bg-white flex justify-center items-center'>
                <Image source={require('../assets/images/logo.png')} className='w-16 h-8 mb-8' />
                <Animated.View
                    style={{
                        transform: [{ translateX: animationValue }], // Se desliza desde la izquierda
                        width: wp(100),
                    }}
                    className={'flex items-center'}
                >
                    <RegisterForm handleContinue={handleContinue} />
                </Animated.View>

                {/* Formulario adicional para chefs */}
                <Animated.View
                    style={{
                        transform: [{ translateX: Animated.add(animationValue, wp(100)) }], // Se desliza desde la derecha
                        width: wp(100),
                        position: 'absolute',
                    }}
                    className={'flex items-center'}
                    >
                    <ChefRegister handleBack={handleBack} handleSignUp={handleSignUp} />
                </Animated.View>
            </View>

        </View>
    );
}
