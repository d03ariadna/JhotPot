import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, Easing } from 'react-native';
import React, { useState, useRef } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '@/components/globals/Buttons/Button';
import ToggleSwitch from '@/components/globals/Buttons/ToggleSwitch';
import { useRouter } from 'expo-router';
import ChefRegister from '@/components/forms/ChefRegister';
import RegisterForm from '@/components/forms/RegisterForm';
import { useAuth } from '@/hooks/store/useAuth';

export default function SignUp() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [showChefForm, setShowChefForm] = useState(false);
    const animationValue = useRef(new Animated.Value(0)).current;

    const {startRegister} = useAuth();

    const router = useRouter();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        profilePictureUrl: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        profilePictureUrl: '',
    });
  
    
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
        // alert('Sign up from auth!');
        // console.log(formState);
        startRegister(formState);
    };
    
    return (
        <View className='flex-1 bg-primary justify-end'>
            

            <View style={{height: hp(90)}} className='rounded-tl-[5rem] bg-white flex justify-center items-center'>
                <Image source={require('@/assets/images/logo.png')} className='w-16 h-8 mb-8' />
                <Animated.View
                    style={{
                        transform: [{ translateX: animationValue }], // Se desliza desde la izquierda
                        width: wp(100),
                    }}
                    className={'flex items-center'}
                >
                    <RegisterForm form={formState} setForm={setFormState} errors={errors} setErrors={setErrors} handleContinue={handleContinue} />
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
                    <ChefRegister form={formState} setForm={setFormState} errors={errors} setErrors={setErrors} handleBack={handleBack} handleSignUp={handleSignUp} />
                </Animated.View>
            </View>

        </View>
    );
}
