import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useState} from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function ToggleIngredient({ item, deleteIng }) {

    const [selected, setSelected] = useState(false);
    
    const ingredientImg = 'https://www.themealdb.com/images/ingredients/' + item.name + '.png';

    const handleTap = () => {

        selected ? deleteIng(item) :
        setSelected(!selected);
    }

    return (
        <TouchableWithoutFeedback onPress={handleTap} className=''>
            <View className='flex items-center mr-5 relative'>
                <View style={{ width: wp(16), height: wp(16) }} className='bg-white rounded-md border border-sixth flex justify-center px-4'>
                    <Image
                    source={{ uri: ingredientImg }}
                    className='w-12 h-12'
                    />
                </View>
                <View style={{ width: wp(16), height: wp(16) }} className={`${selected ? '' : 'hidden'} bg-white/90 rounded-md border border-red-400 absolute flex justify-center items-center`}>
                    <Ionicons name="close" size={30} color="red" />
                </View>
                <Text className='font-medium text-text text-sm mt-1'>
                    {item.name.length > 12 ? `${item.name.slice(0, 15)}...` : item.name}
                </Text>
                <Text className='font-medium text-sixth text-xs mt-1'>{ item.quantity + ' ' + item.measure}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}