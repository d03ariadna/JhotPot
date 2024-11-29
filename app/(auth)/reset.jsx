import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Button from '@/components/globals/Buttons/Button';
import { Colors } from '@/constants/Colors';
import { useAuth } from '@/hooks/store/useAuth';
import Back from '@/components/globals/Buttons/Back';

export default function reset() {

    
    const { isAuth, isLoading, error, startValidateKey } = useAuth();
    
    const [email, setEmail] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const handleValidate = () => {
        setErrorMessage('');
        let isValid = true;

        if (!validateEmail(email)) {
            setErrorMessage((prev) => ( 'Invalid email address.' ));
            isValid = false;

            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
        if (secretKey.length < 1) {
            setErrorMessage('Secret key is required.');
            isValid = false;
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
        if (isValid) {
            // alert(secretKey);
            startValidateKey(email, secretKey );
            // startLogin({ secretKey });
        }
    }


    return (
        <View className='flex-1 justify-end items-center bg-primary'>
            <View style={{paddingVertical: hp(10), height: hp(70)}} className='w-full rounded-tl-[5rem] flex items-center bg-white'>
                <Image source={require('@/assets/images/logo.png')} className='w-16 h-8 mb-8'></Image>
                <Text className='font-bold text-4xl text-black mb-14'>Log in by Secret Key</Text>
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
                    placeholder='Secret Key'
                    secureTextEntry
                    value={secretKey}
                    onChangeText={setSecretKey}
                    editable={!isLoading}
                />
                <Text className='text-red-500 text-sm'>{errorMessage}</Text>
                
                <View className='w-full mx-auto mt-8'>
                    <Button title={ isLoading ? <ActivityIndicator size={20} color='white'/> : 'Log In'} action={handleValidate}/>
                    </View>
                    
                    <TouchableOpacity className='mt-8' onPress={() => router.back()}>
                        <Text className='text-primary font-regular text-sm'>Go back to Log In</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        
        
        </View>
    )
}