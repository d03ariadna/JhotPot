import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Buttons/Button';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/hooks/store/useAuth';

export default function SignIn() {

  const router = useRouter();
  const { isAuth, isLoading, error, startLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    // Limpiar errores previos
    setErrorMessage('');

    let isValid = true;

    if (!validateEmail(email)) {
      setErrorMessage((prev) => ( 'Invalid email address.' ));
      isValid = false;

      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }

    if (isValid) {
      startLogin({ email, password });
    }
  };


  const handleSignUp = () => {
    // Redirigir a la ventana de Sign Up
    router.push('/signUp'); // Asegúrate de que la ruta '/signUp' esté definida en tu estructura de rutas
  };

  const handleReset = () => {
    // Redirigir a la ventana de Reset
    router.push('/reset'); // Asegúrate de que la ruta '/reset' esté definida en tu estructura de rutas
  }

  useEffect(() => {
    // if (isAuth) {
    //   router.push('/home');
    // }

    if (error) {
      setErrorMessage(error);
    }
  }, [isAuth, error]);

  return (
    <View className='flex-1 justify-end items-center bg-primary'>
      <View style={{paddingVertical: hp(10)}} className='w-full rounded-tl-[5rem] flex items-center bg-white'>
        <Image source={require('@/assets/images/logo.png')} className='w-16 h-8 mb-8'></Image>
        <Text className='font-bold text-4xl text-black mb-14'>Log In</Text>
        {/* Logo image */}

        {/* Sign in form */}
        <View style={{ width: wp(80) }} className='align-middle'>
          
          <TextInput
            style={{ marginBottom: hp(4) }}
            className={`${isLoading ? 'text-sixth' : 'text-black'} bg-fourth rounded-xl text-base p-4 placeholder:text-sixth`}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            editable={!isLoading}
          />
          <TextInput
            style={{ marginBottom: hp(2) }}
            className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth'
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            editable={!isLoading}
          />
          <Text className='text-red-500 text-sm'>{errorMessage}</Text>
          
          <TouchableOpacity title='Sign In' />
          <TouchableOpacity onPress={handleReset}>
            <Text className='text-center my-4'>Forgot password?
              <Text className='text-primary'> Reset</Text>
            </Text>
          </TouchableOpacity>
          <View className='w-full mx-auto mt-16'>
              <Button title={ isLoading ? <ActivityIndicator size={20} color='white'/> : 'Log In'} action={handleSignIn}/>
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