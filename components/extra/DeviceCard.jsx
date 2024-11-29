import { View, Text, Image } from 'react-native'
import React from 'react'
import SecondaryButton from '../globals/Buttons/SecondaryButton'
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import Button from '../globals/Buttons/Button'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router'
import ThirdButton from '../globals/Buttons/ThirdButton'
import OutlineButton from '../globals/Buttons/OutlineButton'
import { useDevicesStore } from '@/hooks/store/useDevicesStore'


const DeviceInfo = {
    title: 'Smart Fridge',
    img: 'https://cdn.pixabay',
    ingredients: 10
}

export default function DeviceCard({ device, preview = false }) {

    const router = useRouter();
    const { startDeleteDevice } = useDevicesStore();
    
    const handleManageFood = () => {
        router.push({
            pathname: '/(app)/extra/deviceFood',
            params: {deviceInfo: JSON.stringify(device)}
        });

    }

    const handleDelete = () => {
        console.log('to delete: ', device._id)
        startDeleteDevice(device._id);
    }

    const handleCreateQR = () => {

        const deviceInfo = {
            title: device.name,
            img: device.img,
            ingredients: device.ingredients
        }
        router.push({
            pathname: '/(app)/extra/(devices)/generateQR',
            params: {deviceInfo: JSON.stringify(deviceInfo)}
        });
    }

    return (
        <View className='rounded-3xl overflow-hidden border border-sixth mb-10'>

            {
            device.img
                ?
                <Image
                style={{ height: hp(20) }}
                source={ { uri: device.img }} />
                :
                <View style={{ height: hp(20) }} className='bg-fourth flex items-center justify-center'>
                <MaterialCommunityIcons name="fridge-outline" size={80} color={Colors.light['sixth']} />
                </View>
            }
            


            <View className='p-5'>
                <Text className='font-semibold text-xl'>{device.name}</Text>
                <Text className='mt-4 mb-6 font-regular text-text'>Lorem ipsum, dolor sit amet consrferendis maxime explicabo quisquam totam sed sequi </Text>
                {
                    !preview &&
                    (
                        <>
                            <View className='flex-row gap-3'>
                                <SecondaryButton title={'Manage Food'} action={handleManageFood} />
                                <View className='w-16'>
                                <SecondaryButton
                                    title={<Octicons name="trash" size={26} color={Colors.light['primary']} />}
                                    action={handleDelete} />
                                </View>
                            </View>
                            <View className='mt-5'>
                                <OutlineButton
                                    title={'Generate Device QR'}
                                    action={handleCreateQR}
                                />
                            </View>
                        </>
                    )
                }
                
            </View>
        </View>
    )
}