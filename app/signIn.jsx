import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignIn() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-bold text-4xl'>Sign In</Text>

      {/* Sign in form */}
      <View className='w-96'>
        <Text className='text-lg'>Email</Text>
        <TextInput className='input' placeholder='Email' />

        <Text className='text-lg'>Password</Text>
        <TextInput className='input' placeholder='Password' secureTextEntry />

        <TouchableOpacity title='Sign In' />

        <Text className='text-center mt-4'>Don't have an account? <Text className='text-primary'>Sign Up</Text></Text>

        <Text className='text-center mt-4'>Forgot password? <Text className='text-primary'>Reset</Text></Text>

        <Text className='text-center mt-4'>Or sign in with</Text>

        <View className='flex flex-row justify-center mt-4'>
          <TouchableOpacity title='Google' />
          <TouchableOpacity title='Facebook' />
        </View>
      </View>
        
        
    </View>
  )
}