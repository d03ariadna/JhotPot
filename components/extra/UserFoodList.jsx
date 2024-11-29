import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
// import { ingredients } from '@/data/Ingredients';
// import ingredients from '@/data/Ingredients.json';
import HorizontalIng from '@/components/globals/Ingredients/HorizontalIng';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';

export default function UserFoodList({ deviceId = null }) {

    const router = useRouter();

    const { devices } = useDevicesStore();
    const { userIngredients } = useUserIngredientsStore();

    const device = devices.find(device => device._id === deviceId);

    const food = device ? device.ingredients : userIngredients;

    const handleAdd = () => {
        router.push({
            pathname: '/extra/(food)/addFood',
            params: { device: deviceId }
        });
    }

    
    return (
        <View style={{paddingBottom: hp(25)}}>
            <View style={{marginBottom: hp(4)}} className='flex-row justify-between items-center'>
                <Text className='font-medium text-sm text-text'>
                    Ingredients
                    <Text>({food.length})</Text>
                </Text>

                    <TouchableOpacity onPress={handleAdd} className='flex-row items-center gap-1'>
                        <Ionicons name="add-circle-outline" size={16} color={Colors.light['primary']} />
                        <Text className='font-semibold text-sm text-primary'>Add New</Text>
                    </TouchableOpacity>
            </View>

            {
                food.length === 0
                ?    (
                    // <View style={{alignItems: 'center', justifyContent: 'center', height: hp(50)}} className='flex-1'>
                    //     <Image source={require('@/assets/images/empty.png')} style={{width: wp(60), height: wp(60)}} className='mb-4' />
                        <Text className='text-center font-medium text-sixth'>Start adding your ingredients!</Text>
                    // </View>
                    )
                    :
                    <FlatList
                    data={food}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                        <HorizontalIng item={item} />
                        </>
                    )}
                    />
            }
        </View>
    )
}