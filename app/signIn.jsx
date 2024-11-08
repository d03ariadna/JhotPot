import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Button';
import { useAuth } from '@/context/AuthContext';

export default function SignIn() {

  const router = useRouter();

  const { login } = useAuth();
  
  const handleSignIn = () => {
    login();
  };

  const handleSignUp = () => {
    // Redirigir a la ventana de Sign Up
    router.push('/signUp'); // Asegúrate de que la ruta '/signUp' esté definida en tu estructura de rutas
  };

  return (
    <View className='flex-1 justify-end items-center bg-primary'>
      <View style={{paddingVertical: hp(10)}} className='w-full rounded-tl-[5rem] flex items-center bg-white'>
        <Image source={require('../assets/images/logo.png')} className='w-16 h-8 mb-8'></Image>
        <Text className='font-bold text-4xl text-black mb-14'>Log In</Text>
        {/* Logo image */}

        {/* Sign in form */}
        <View style={{width: wp(80)}} className='align-middle'>
          <TextInput style={{marginBottom: hp(4)}} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Email' />
          <TextInput style={{marginBottom: hp(2)}} className='bg-fourth rounded-xl text-base p-4 placeholder:text-fifth' placeholder='Password' secureTextEntry />
          <TouchableOpacity title='Sign In' />
          <Text className='text-center my-4'>Forgot password? <Text className='text-primary'>Reset</Text></Text>
          <View className='w-full mx-auto mt-16'>
              <Button title={'Log In'} action={handleSignIn}/>
          </View>
          
            <TouchableOpacity onPress={handleSignUp}>
          <Text className='text-center mt-8'>Don't have an account?
              <Text className='text-primary'> Create one now!</Text>
          </Text>
            </TouchableOpacity>
        </View>
      </View>
        
        
    </View>
  )
}