import { View, Text, TouchableOpacity, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import SmallButton from '../Buttons/SmallButton';
import { getRandomColor } from '@/utils/getRandomColor';
import Ingredients from '@/data/Ingredients.json'
import { useRouter } from 'expo-router';
import SaveRecipeButton from '../Buttons/SaveRecipeButton';
import { useAuth } from '@/hooks/store/useAuth';

export default function SmallRecipeCard({recipe}) {

    const router = useRouter();
    const {token} = useAuth();

    const color = getRandomColor(recipe.id);
    const image = recipe.images[0];

    const isUser = recipe.chefId === token;

    const handleOpen = () => {
        router.push({
            pathname:
                isUser
                    ? '/(app)/(tabs)/profile/profileRecipe'
                    : '/(app)/(tabs)/chefs/chefRecipe',
            params: { recipeInfo: JSON.stringify(recipe) }
        });
    };

    return (
        <View
            style={{ width: wp(40), height: wp(42), backgroundColor: color, marginBottom: 20, marginRight: hp(3) }}
            className="rounded-2xl p-4 flex justify-between">
            <View style={{height: hp(5)}}>
                <View className='w-7'>
                    <SaveRecipeButton id={recipe.id} />
                </View>
                <Text className="text-xs font-semibold mt-6 text-primary">| {recipe.category}</Text>
                <Text
                    className="w-28 text-lg mt-1 font-semibold"
                    numberOfLines={2} // Número de líneas permitidas
                    ellipsizeMode="tail"
                >{recipe.name}</Text>
            </View>
            <SmallButton title="View Recipe" action={handleOpen} />
            <Image
                source={{uri: image}}
                className="w-24 h-24 rounded-full absolute -right-3"
            />
        </View>
    )
}