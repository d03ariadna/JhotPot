import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ingredients from '@/data/Ingredients.json';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';

export default function RecipeIngredient({ ingredient }) {

    const { userIngredients } = useUserIngredientsStore();

    // console.log(ingredient)
    const name = Ingredients[ingredient.ingredientId]?.name || 'Not found';
    const id = ingredient.ingredientId ? ingredient.ingredientId : 0;

    const imageUrl = 'https://www.themealdb.com/images/ingredients/' + Ingredients[id].name + '.png';

    const isPresent = !!userIngredients.find(item => item.ingredientId === id);

    return (
        <View className='flex items-center mr-5'>
            <View style={{ width: wp(16), height: wp(16) }}
                className={`${isPresent ? 'border-lime-500' : 'border-fourth'} bg-fourth border  rounded-lg flex items-center justify-center px-4`}>
            <Image
            source={{ uri: imageUrl }}
            className='w-12 h-12'
            />
            </View>
            <Text className='font-medium text-text text-sm mt-1'>{name}</Text>
            <Text className={`${isPresent ? 'text-lime-500' : 'text-sixth'} font-medium text-xs mt-1`}>{ ingredient.quantity + ' ' + ingredient.unit}</Text>
        </View>
    )
}