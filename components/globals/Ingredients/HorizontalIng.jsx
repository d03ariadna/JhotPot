import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ingredients from '@/data/Ingredients.json';
import formatDate from '@/utils/formateDate';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';
import { usePathname, useRouter } from 'expo-router';


export default function HorizontalIng({ item }) {

    const router = useRouter();
    const pathName = usePathname();

    const { startDeleteIngredient } = useUserIngredientsStore();

    // Crear valores animados
    const [translateX] = useState(new Animated.Value(0));
    const [opacity] = useState(new Animated.Value(0));

    const name = ingredients[item.ingredientId].name;
    const creationDate = formatDate(item.creationDate);
    const expDate = formatDate(item.expirationDate);

    // Manejar el deslizamiento y la aparición del botón de eliminar
    const toggleDeleteButton = () => {
        const toValue = translateX._value === 0 ? -80 : 0; // Determinar el valor de deslizamiento
        const newOpacity = toValue === 0 ? 0 : 1;

        // Animar tanto el desplazamiento como la opacidad
        Animated.parallel([
            Animated.timing(translateX, {
                toValue,
                duration: 300,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: newOpacity,
                duration: 300,
                useNativeDriver: true
            })
        ]).start();
    };

    const handleDelete = () => {
        // Delete the item from the list
        console.log(`Deleting item with id: ${item.id}`);
        startDeleteIngredient(item.id);
    };

    return (
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Animated.View
                style={{
                    transform: [{ translateX: translateX }], // Ajusta el color de fondo según tu diseño
                }}
                className='flex-1 flex-row items-center'
            >

                <TouchableOpacity className='flex-row items-center gap-4' onPress={toggleDeleteButton}>
                    <View style={{ width: wp(18), height: wp(18) }} className="bg-fourth rounded-lg flex justify-center px-4">
                        <Image
                            source={{ uri: 'https://www.themealdb.com/images/ingredients/'+name+'.png' }}
                            className='w-14 h-14'
                        />
                    </View>
                    <View className='flex-grow'>
                    <View className='flex-row justify-between items-center mb-2'>
                        <Text className='font-semibold text-second text-lg mt-1'>{name}</Text>
                            <Text className='font-medium text-third text-sm mt-1'>{ item.quantity + ' ' + item.unit }</Text>
                    </View>
                    <View className='flex-row justify-between items-center mb-2'>
                        <Text className='font-medium text-slate-400 text-sm mt-1'>Added: {creationDate}</Text>
                        <Text className='font-medium text-slate-400 text-sm mt-1'>Ex: {expDate}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <Animated.View className='' style={{ opacity: opacity, height: hp(7), width: hp(8), marginLeft: hp(1.5) }}>
                    <TouchableOpacity className='bg-red-600 flex-grow justify-center items-center rounded-md' onPress={handleDelete}>
                        <Feather name="trash-2" size={24} color="white" />
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    );
}
