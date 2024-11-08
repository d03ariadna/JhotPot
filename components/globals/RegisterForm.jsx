import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Button';
import ToggleSwitch from '@/components/globals/ToggleSwitch';


export default function RegisterForm({ handleContinue }) {

    const router = useRouter();

    const handleSignIn = () => {
        router.push('/signIn');
    };

    
    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
            <Text className='font-bold text-4xl text-black mb-14'>Create an Account</Text>
            <View style={{ width: wp(80) }} className='align-middle'>
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Name' />
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Email' />
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Password' secureTextEntry />
                <TextInput style={{ marginBottom: hp(3) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Confirm Password' secureTextEntry />
                {/* <View className='flex-row items-center justify-between'>
                    <Text className='text-lg font-semibold pb-0'>Are you a chef?</Text>
                    <ToggleSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
                </View> */}
                <TouchableOpacity title='Sign In' />
                <View className='w-full mx-auto mt-8'>
                    <Button title={'Continue'} action={handleContinue} />
                </View>
                <TouchableOpacity onPress={handleSignIn}>
                    <Text className='text-center mt-8'>Already have an account?
                        <Text className='text-primary'> Log In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}