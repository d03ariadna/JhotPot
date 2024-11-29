import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Buttons/Button';
import ToggleSwitch from '@/components/globals/Buttons/ToggleSwitch';


export default function RegisterForm({ form, setForm, errors, setErrors, handleContinue }) {

    const router = useRouter();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    const handleSignIn = () => {
        router.push('/signIn');
    };

    const handleCheck = () => {

        let isValid = true;
        //Validations
        if(form.name === ''){
            setErrors((prev) => ({ ...prev, name: 'Name is required' }));
            isValid = false;
        } else {
            setErrors((prev) => ({ ...prev, name: '' }));
            // setIsValid(true);
        }

        if(form.email === ''){
            setErrors((prev) => ({ ...prev, email: 'Email is required' }));
            isValid = false;
        } else {
            setErrors((prev) => ({ ...prev, email: '' }));
            // setIsValid(true);
        }

        if(form.password === ''){
            setErrors((prev) => ({ ...prev, password: 'Password is required' }));
            isValid = false;
        } else if (!passwordRegex.test(form.password)) { 
            setErrors((prev) => ({ ...prev, password: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character' }));
            isValid = false;
        } else {            
            setErrors((prev) => ({ ...prev, password: '' }));
            // setIsValid(true);
        }

        if (form.confirmPassword === '' || form.confirmPassword !== form.password) {  
            setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords must be the same' }));
            isValid = false;
        } else {
            setErrors((prev) => ({ ...prev, confirmPassword: '' }));
        }

        setTimeout(() => {
            setErrors((prev) => ({ ...prev, name: '', email: '', password: '', confirmPassword: '' }));
        }, 3000);

        if(isValid){
            handleContinue();
        }
    }

    const handleChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    
    return (
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
            <Text className='font-bold text-4xl text-black mb-14'>Create an Account</Text>
            <View style={{ width: wp(80) }} className='align-middle'>
                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'name'} value={form.name} onChangeText={(value) => handleChange('name', value)} placeholder='Name' />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.name}</Text>

                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'email'} value={form.email} onChangeText={(value) => handleChange('email', value)} placeholder='Email' />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.email}</Text>

                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'password'} value={form.password} onChangeText={(value) => handleChange('password', value)} placeholder='Password' secureTextEntry />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.password}</Text>

                <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' name={'confirmPassword'} value={form.confirmPassword} onChangeText={(value) => handleChange('confirmPassword', value)} placeholder='Confirm Password' secureTextEntry />
                <Text style={{ marginBottom: hp(2) }} className='text-red-600 text-xs font-regular mt-1 ml-1'>{errors.confirmPassword}</Text>
                {/* <View className='flex-row items-center justify-between'>
                    <Text className='text-lg font-semibold pb-0'>Are you a chef?</Text>
                    <ToggleSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
                </View> */}
                <TouchableOpacity title='Sign In' />
                <View className='w-full mx-auto mt-8'>
                    <Button title={'Continue'} action={handleCheck} />
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