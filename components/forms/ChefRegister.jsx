import { View, Text, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Buttons/Button';
import ToggleSwitch from '@/components/globals/Buttons/ToggleSwitch';
import { Ionicons } from '@expo/vector-icons';


export default function ChefRegister({ form, setForm, errors, setErrors, handleBack, handleSignUp}) {

    const router = useRouter();

    // const [isValid, setIsValid] = useState(false);


    const handleCheck = () => {
        //Validations

        let isValid = true;

        if(form.location === ''){
            setErrors((prev) => ({ ...prev, location: 'Location is required' }));
            isValid = false;
        } else {
            setErrors((prev) => ({ ...prev, location: '' }));
            
        }

        if (form.profilePictureUrl === '') {
            setForm((prev) => ({ ...prev, profilePictureUrl: '' }));
        }

        setTimeout(() => {
            setErrors((prev) => ({ ...prev, location: '' }));
        }, 3000);

        console.log(isValid);
        if(isValid){
            handleSignUp();
        }
    }

    const handleChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

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

                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'location'} value={form.location} onChangeText={(value) => handleChange('location', value)} placeholder='Location' />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.location}</Text>
                
                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'profilePictureUrl'} value={form.profilePictureUrl} onChangeText={(value) => handleChange('profilePictureUrl', value)} placeholder='Profile Picture' />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.profilePictureUrl}</Text>
                
                
                <View className='w-full mx-auto mt-8'>
                    <Button title={'Register'} action={handleCheck} />
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