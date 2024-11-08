import { View, Text, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Button';
import ToggleSwitch from '@/components/globals/ToggleSwitch';
import { Ionicons } from '@expo/vector-icons';


export default function ChefRegister({handleBack, handleSignUp}) {

    const router = useRouter();

    const [isEnabled, setIsEnabled] = useState(false);


    const handleSignIn = () => {
        // Redirigir a la ventana de Sign Up
        router.push('/signIn'); // Asegúrate de que la ruta '/signUp' esté definida en tu estructura de rutas
    };

    const handleContinue = () => {
        alert('Continue');
        // router.push('/home'); 
    };
    
    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
            <Text className='font-bold text-4xl text-black mb-14'>Chef Registration</Text>
            <View style={{ width: wp(80) }} className='align-middle'>
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Location' />
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Photo' />
                
                
                <View className='w-full mx-auto mt-8'>
                    <Button title={'Register'} action={handleSignUp} />
                </View>
                <TouchableOpacity onPress={handleBack} className='mt-8 flex-row items-center justify-start'>
                    <Ionicons name='arrow-back' size={15} color='black' />
                    <Text className='text-center'> Back</Text>
                </TouchableOpacity>
            </View>
        </>
        // </TouchableWithoutFeedback>
    )
}